import { Component } from '@angular/core';
import { IStorage } from '@models//localstorage-obj.interface';
import { WeatherService } from '@services/weather/weather.service';
import { ZipCodesStorageService } from '@services/zip-codes/zip-codes-storage.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  weatherArray: IStorage[];
  constructor(
    private zipService: ZipCodesStorageService,
    public service: WeatherService
  ) {
    this.weatherArray = this.zipService.getZipCodes();
  }
  getById(id: number): string {
    return this.service.getIcons(id);
  }
  remove(zipcode: string) {
    console.log(123, zipcode);
    this.zipService.removeZipCode(zipcode);
  }
}
