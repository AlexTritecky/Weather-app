import { IWeatherResponse } from './weather-card-response/weather-response.interface';

export interface IStorage {
  zipcode: string;
  weatherData: IWeatherResponse;
}
