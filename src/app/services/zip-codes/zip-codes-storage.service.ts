import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IStorage } from "@models//localstorage-obj.interface";

@Injectable({
  providedIn: "root",
})
export class ZipCodesStorageService {
  locations: IStorage[] = [];
  localItems!: string | null;
  constructor(private snackBar: MatSnackBar) {
    this.localItems = localStorage.getItem("locations");
  }

  addZipCode(obj: IStorage) {
    if (this.locations.some((e) => e.zipcode === obj.zipcode)) {
      this.snackBar.open(`This city already exist`, "Close", {
        panelClass: "snackbar-error",
      });
    } else {
      this.locations.push(obj);
      
      localStorage.setItem("locations", JSON.stringify(this.locations));
    }
  }

  removeZipCode(zipcode: string) {
    let index = this.locations.findIndex((value) => value.zipcode === zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem("locations", JSON.stringify(this.locations));
    }
  }

  getZipCodes(): IStorage[] {
    this.locations =
      this.localItems !== null ? JSON.parse(this.localItems) : [];
    return this.locations;
  }
}
