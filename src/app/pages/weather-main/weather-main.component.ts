import { Component } from '@angular/core';
import { IStorage } from '@models//localstorage-obj.interface';
import { IWeatherResponse } from '@models//weather-card-response/weather-response.interface';
import { WeatherService } from '@services/weather-service/weather-service.service';

import { ZipCodesStorageService } from '@services/zip-codes/zip-codes-storage.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
})
export class WeatherMainComponent {
  localObj!: IStorage;
  weatherArray$: Observable<IStorage[]>;
  constructor(
    private service: WeatherService,
    private zipService: ZipCodesStorageService
  ) {
    this.weatherArray$ = this.zipService.weatherData$;
  }

  addZipLocation(zipcode: string): void {
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
