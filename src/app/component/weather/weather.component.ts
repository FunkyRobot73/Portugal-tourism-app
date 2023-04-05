import { Component, OnInit } from '@angular/core';
import { GetweatherService } from 'src/app/service/getweather.service';
import { CitiesComponent } from '../cities/cities.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
cities:any;
weatherData:any;
constructor(private _weatherData:GetweatherService) { }

ngOnInit() {
  this.weatherData = this._weatherData.getWeather();
}
};
