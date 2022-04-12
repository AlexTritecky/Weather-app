import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FifeDayForecastModule } from '@pages/fife-day-forecast/fife-day-forecast.module';
import { WeatherMainModule } from '@pages/weather-main/weather-main.module';
import { WeatherModule } from '@services/weather/weather.module';
import { ZipCodesStorageModule } from '@services/zip-codes/zip-codes-storage.module';

import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    WeatherMainModule,
    FifeDayForecastModule,

    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,

    WeatherModule.forRoot(),
    ZipCodesStorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
