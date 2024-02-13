import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherMainRoutingModule } from './weather-main-routing.module';
import { WeatherMainComponent } from './weather-main.component';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { WeatherCardComponent } from '@components/weather-card/weather-card.component';
import { SearchComponent } from '@components/search/search.component';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    WeatherMainRoutingModule,
    WeatherCardComponent,
    SearchComponent,
    MatSnackBarModule,
  ],
  exports: [WeatherMainComponent],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 7000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      },
    },
  ],
})
export class WeatherMainModule {}
