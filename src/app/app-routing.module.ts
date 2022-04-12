import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
