import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForecastResponse } from '@models//forecast-response/forecast-response.interface';
import { WeatherService } from '@services/weather-service/weather-service.service';

import { filter, Observable, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-fife-day-forecast',
  templateUrl: './fife-day-forecast.component.html',
  styleUrls: ['./fife-day-forecast.component.scss'],
})
export class FifeDayForecastComponent {
  forecastData$!: Observable<IForecastResponse>;

  constructor(private service: WeatherService, private route: ActivatedRoute) {
    this.forecastData$ = this.route.params.pipe(
      pluck('id'),
      filter((id) => !!id),
      switchMap((id) => this.service.getForecast(id))
    );
  }
}
