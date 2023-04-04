import { Injectable } from '@angular/core';
import { Citiesinfo } from "../component/cities/cities-info-data"

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {
  constructor() {
    
    
  }
  getCities() {
    return Citiesinfo;
  }
  
  colorIt() {
    
  }
}



