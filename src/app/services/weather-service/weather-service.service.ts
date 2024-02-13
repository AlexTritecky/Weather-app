import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IWeatherResponse } from '@models//weather-card-response/weather-response.interface';
import { IForecastResponse } from '@models//forecast-response/forecast-response.interface';

type IconKey = 'rain' | 'snow' | 'clouds' | 'sun';
type IconMap = { [key in IconKey]: number[] };

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  private handleError(error: HttpErrorResponse) {
    this.snackBar.open(`${error.error.message}`, 'Close', {
      panelClass: 'snackbar-error',
    });
    return throwError(() => error);
  }

  private buildUrl(
    endpoint: string,
    params: { [key: string]: string | number }
  ): string {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return `${environment.url}/${endpoint}?${queryString}&APPID=${environment.appId}`;
  }

  loadWeatherCard(zipcode: string): Observable<IWeatherResponse> {
    const url = this.buildUrl('weather', {
      zip: `${zipcode},us`,
      units: 'imperial',
    });
    return this.http
      .get<IWeatherResponse>(url)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getForecast(zipcode: string): Observable<IForecastResponse> {
    const url = this.buildUrl('forecast/daily', {
      zip: `${zipcode},us`,
      units: 'metric',
      cnt: 5,
    });
    return this.http
      .get<IForecastResponse>(url)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getIcons(id: number): string {
    // Define the iconMap with explicit type
    const iconMap: IconMap = {
      rain: [200, 531],
      snow: [600, 622],
      clouds: [801, 804],
      sun: [800],
    };

    // Use the keys from iconMap to find the correct icon key
    const iconKey =
      (Object.keys(iconMap) as IconKey[]).find(
        (key) => id >= iconMap[key][0] && id <= iconMap[key][1]
      ) || 'sun';

    return `${environment.iconUrl}/weather/${iconKey}.png`;
  }
}
