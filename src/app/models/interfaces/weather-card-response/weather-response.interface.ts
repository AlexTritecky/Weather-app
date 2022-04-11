import { ICloud } from './cloud.interface';
import { ICoordinate } from './coordinate.interface';
import { IMain } from './main.interface';
import { ISystem } from './system.interface';
import { IWeather } from './weather.interface';
import { IWind } from './wind.interface';

export interface IWeatherResponse {
  base: string;
  clouds: ICloud;
  cod: number;
  coord: ICoordinate;
  dt: number;
  id: number;
  main: IMain;
  name: string | null;
  sys: ISystem;
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}
