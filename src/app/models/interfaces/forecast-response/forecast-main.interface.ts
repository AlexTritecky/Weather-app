import { IMain } from '../weather-card-response/main.interface';

export interface IForecastMain extends IMain {
  grnd_level: number;
  sea_level: number;
  temp_kf: number;
}
