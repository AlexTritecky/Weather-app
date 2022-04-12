import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card.component';
import { ButtonsModule } from '@shared/buttons';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WeatherCardComponent],
  imports: [CommonModule, ButtonsModule, RouterModule],
  exports: [WeatherCardComponent],
})
export class WeatherCardModule {}
