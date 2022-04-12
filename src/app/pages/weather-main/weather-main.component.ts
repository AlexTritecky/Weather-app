import { Component } from '@angular/core';
import { IStorage } from '@models//localstorage-obj.interface';
import { IWeatherResponse } from '@models//weather-card-response/weather-response.interface';
import { WeatherService } from '@services/weather/weather.service';
import { ZipCodesStorageService } from '@services/zip-codes/zip-codes-storage.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
})
export class WeatherMainComponent {
  localObj!: IStorage;
  weatherArray!: IStorage[];
  constructor(
    private service: WeatherService,
    private zipService: ZipCodesStorageService
  ) {}

  addZipLocation(zipcode: string) {
    this.service
      .loadWeatherCard(zipcode)
      .pipe(
        map((response: IWeatherResponse) => {
          this.localObj = {
            zipcode: zipcode,
            weatherData: response,
          };
          this.zipService.addZipCode(this.localObj);
        })
      )
      .subscribe();
  }
}
