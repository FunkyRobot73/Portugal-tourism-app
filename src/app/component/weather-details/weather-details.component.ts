import { Component } from '@angular/core';
import { GetweatherService } from 'src/app/service/getweather.service';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  
  
  
  weatherData:any;
  constructor(private _weatherData:GetweatherService) {
    let cityName = this.weatherData.name;
    let summerM = this.weatherData.summerM;
    let summerN = this.weatherData.summerN;
    let springM = this.weatherData.springM;
    let springn = this.weatherData.springN;
    let autumnM = this.weatherData.autumnM;
    let autumnN = this.weatherData.autumnN;
    let winterM = this.weatherData.winterM;
    let winterN = this.weatherData.winterN;
    let VT = this.weatherData.visitTo;
    let VF = this.weatherData.visitFrom;
  }
  
  ngOnInit() {
    this.weatherData = this._weatherData.getWeather();
  }
  };

