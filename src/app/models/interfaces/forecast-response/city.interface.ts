import { ICoordinate } from '../weather-card-response/coordinate.interface';

export interface ICity {
  coord: ICoordinate;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
