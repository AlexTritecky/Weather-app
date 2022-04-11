import { ICloud } from '../weather-card-response/cloud.interface';
import { IWeather } from '../weather-card-response/weather.interface';
import { IWind } from '../weather-card-response/wind.interface';
import { IForecastMain } from './forecast-main.interface';
import { IForecastSystem } from './forecast-sys.interface';

export interface IForecastList {
  clouds: ICloud;
  dt: number;
  dt_txt: string;
  main: IForecastMain;
  pop: number;
  sys: IForecastSystem;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}
