import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FifeDayForecastRoutingModule } from './fife-day-forecast-routing.module';
import { FifeDayForecastComponent } from './fife-day-forecast.component';
import { ForecastInfoComponent } from '@components/forecast-info/forecast-info.component';

@NgModule({
  declarations: [FifeDayForecastComponent],
  imports: [CommonModule, FifeDayForecastRoutingModule, ForecastInfoComponent],
  exports: [FifeDayForecastComponent],
})
export class FifeDayForecastModule {}
