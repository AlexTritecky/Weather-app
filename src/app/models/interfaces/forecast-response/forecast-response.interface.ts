import { ICity } from './city.interface';
import { IForecastList } from './forecast-list.interface';

export interface IForecastResponse {
  city: ICity;
  cnt: number;
  cod: string;
  list: IForecastList[];
  message: number;
}
