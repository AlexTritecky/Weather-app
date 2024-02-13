import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/weather-main/weather-main.module').then(
            (m) => m.WeatherMainModule
          ),
      },
      {
        path: 'forecast',
        loadChildren: () =>
          import('./pages/fife-day-forecast/fife-day-forecast.module').then(
            (m) => m.FifeDayForecastModule
          ),
      },
    ],
  },
];
