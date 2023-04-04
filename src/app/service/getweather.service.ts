import { Injectable } from '@angular/core';
import { citiesWeather } from '../data';


@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor() { }

  getWeather() {
    return citiesWeather;
  }
}
