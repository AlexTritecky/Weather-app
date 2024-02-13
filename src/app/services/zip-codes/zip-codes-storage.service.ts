import { Injectable } from '@angular/core';
import { IStorage } from '@models/localstorage-obj.interface';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ZipCodesStorageService {
  private locations: IStorage[] = [];
  private readonly localStorageKey = 'locations';
  private weatherDataSubject = new BehaviorSubject<IStorage[]>([]);
  public weatherData$ = this.weatherDataSubject.asObservable();

  constructor(private snackBar: MatSnackBar) {
    this.loadZipCodes();
  }

  private notify(
    message: string,
    action: string = 'Close',
    panelClass: string = 'snackbar-error'
  ) {
    this.snackBar.open(message, action, { panelClass });
  }

  private saveLocationsToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.locations));
    this.weatherDataSubject.next(this.locations);
  }

  private loadZipCodes() {
    const data = localStorage.getItem(this.localStorageKey);
    if (data) {
      this.locations = JSON.parse(data);
      this.weatherDataSubject.next(this.locations);
    }
  }

  addZipCode(obj: IStorage) {
    if (this.locations.some((e) => e.zipcode === obj.zipcode)) {
      this.notify('This city already exists');
      return;
    }
    this.locations.push(obj);
    this.saveLocationsToStorage();
  }

  removeZipCode(zipcode: string) {
    const index = this.locations.findIndex(
      (value) => value.zipcode === zipcode
    );
    if (index !== -1) {
      this.locations.splice(index, 1);
      this.saveLocationsToStorage();
    }
  }
}
