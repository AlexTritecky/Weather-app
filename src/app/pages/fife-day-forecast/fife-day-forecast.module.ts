import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FifeDayForecastRoutingModule } from './fife-day-forecast-routing.module';
import { FifeDayForecastComponent } from './fife-day-forecast.component';
import { ForecastInfoModule } from '@components/forecast-info/forecast-info.module';

@NgModule({
  declarations: [FifeDayForecastComponent],
  imports: [CommonModule, FifeDayForecastRoutingModule, ForecastInfoModule],
  exports: [FifeDayForecastComponent],
})
export class FifeDayForecastModule {}
