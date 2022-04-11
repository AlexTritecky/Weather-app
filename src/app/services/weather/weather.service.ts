import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IForecastResponse } from '@models//forecast-response/forecast-response.interface';
import { IWeatherResponse } from '@models//weather-card-response/weather-response.interface';

import { environment } from 'environments/environment';

import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  loadWeatherCard(zipcode: string): Observable<IWeatherResponse> {
    return this.http
      .get<IWeatherResponse>(
        `${environment.url}/weather?zip=${zipcode},us&units=imperial&APPID=${environment.appId}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.snackBar.open(`${error.error.message}`, 'Close', {
            panelClass: 'snackbar-error',
          });
          return throwError(() => error);
        })
      );
  }

  getForecast(zipcode: string): Observable<IForecastResponse> {
    return this.http.get<IForecastResponse>(
      `${environment.url}/forecast?zip=${zipcode},us&units=imperial&cnt=5&APPID=${environment.appId}`
    );
  }

  getIcons(id: number): string {
    switch (true) {
      case 200 <= id && id <= 531:
        return `${environment.iconUrl}/weather/rain.png`;
      case 600 <= id && id <= 622:
        return `${environment.iconUrl}/weather/snow.png`;
      case 801 <= id && id <= 804:
        return `${environment.iconUrl}/weather/clouds.png`;
      case id == 800:
        return `${environment.iconUrl}/weather/sun.png`;
      default:
        return `${environment.iconUrl}/weather/sun.png`;
    }
  }
}
