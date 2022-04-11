import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class WeatherModule {
  static forRoot(): ModuleWithProviders<WeatherModule> {
    return {
        ngModule: WeatherModule,
        providers: [
          WeatherService
        ]
    };
}
 }
