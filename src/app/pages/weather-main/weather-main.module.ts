import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherMainRoutingModule } from './weather-main-routing.module';
import { WeatherMainComponent } from './weather-main.component';
import { SearchModule } from '@components/search/search.module';
import { WeatherCardModule } from '@components/weather-card/weather-card.module';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    WeatherMainRoutingModule,
    SearchModule,
    WeatherCardModule,
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
