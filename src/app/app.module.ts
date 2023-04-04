import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CitiesComponent } from './component/cities/cities.component';
import { WeatherComponent } from './component/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
