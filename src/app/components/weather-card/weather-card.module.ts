import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card.component';
import { ButtonsModule } from '@shared/buttons';

@NgModule({
  declarations: [WeatherCardComponent],
  imports: [CommonModule,ButtonsModule],
  exports: [WeatherCardComponent],
})
export class WeatherCardModule {}
