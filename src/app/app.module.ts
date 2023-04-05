import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CitiesComponent } from './component/cities/cities.component';
import { WeatherComponent } from './component/weather/weather.component';
import { WeatherDetailsComponent } from './component/weather-details/weather-details.component';
import { ImportantTextDirective } from './directive/important-text.directive';
import { TechIdeasComponent } from './component/tech-ideas/tech-ideas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    ImportantTextDirective,
    TechIdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
