import { IWeather } from '../weather-card-response/weather.interface';
import { IFeelsLike } from './forecast-feels-like.interface';
import { IForecastTemp } from './forecast-temp.interface';

export interface IForecastList {
  clouds: number;
  deg: number;
  dt: number;
  feels_like: IFeelsLike;
  gust: number;
  humidity: number;
  pop: number;
  pressure: number;
  rain: number;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: IForecastTemp;
  weather: IWeather[];
}
