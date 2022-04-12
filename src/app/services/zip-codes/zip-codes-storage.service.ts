import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IStorage } from '@models//localstorage-obj.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZipCodesStorageService {
  locations: IStorage[] = [];

  private _localStorage: Storage;
  private _weatherData$ = new BehaviorSubject<IStorage[]>(this.locations);
  public weatherData$ = this._weatherData$.asObservable();

  constructor(private snackBar: MatSnackBar) {
    this._localStorage = localStorage;
    this.getZipCodes();
  }

  addZipCode(obj: IStorage) {
    if (this.locations.some((e) => e.zipcode === obj.zipcode)) {
      this.snackBar.open(`This city already exist`, 'Close', {
        panelClass: 'snackbar-error',
      });
    } else {
      this.locations.push(obj);

      this._localStorage.setItem('locations', JSON.stringify(this.locations));
      this._weatherData$.next(this.locations);
    }
  }

  removeZipCode(zipcode: string) {
    let index = this.locations.findIndex((value) => value.zipcode === zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);

      this._localStorage.setItem('locations', JSON.stringify(this.locations));
      this._weatherData$.next(this.locations);
    }
  }

  getZipCodes() {
    const data = this._localStorage.getItem('locations');
    if (data) {
      this.locations = JSON.parse(data);
      this._weatherData$.next(this.locations);
    }
  }
}
