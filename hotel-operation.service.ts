
import { Injectable } from '@angular/core';
import { Hotel } from './hotel';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelDTO } from './hotel-dto';

@Injectable({
  providedIn: 'root'
})
export class HotelOperationService {

  baseURL:string = 'http://localhost:2004';
  addHotel=this.baseURL+'/Hotel/add';
  hotelByCity:string=this.baseURL+'/Hotel/city';
  allHotel:string = this.baseURL+'/Hotel/hotels';
  

  constructor(private http:HttpClient) { 
    //console.log("Inside Constructor "+this.hotelByCityEndPoint);
  }
  
  
  endpoint=this.baseURL+'/Hotel/add'

  createHotel(hotel:Hotel):Observable<HotelDTO>
  {
    
    console.log('Hotel Service - Create Hotel called '+Hotel);
    return this.http.post<HotelDTO>(`${this.endpoint}`,hotel);
  }

  getHotelsDetailsbyCity(city:string):Observable<HotelDTO[]>{
    console.log("Inside Method 1 "+this.hotelByCity);
    this.hotelByCity=this.hotelByCity+'/'+city;
    console.log("After adding city  "+this.hotelByCity);
    

    return this.http.get<HotelDTO[]>(`${this.hotelByCity}`);
  }

  getAllHotelsFromSpring():Observable<HotelDTO[]>
  {
    console.log("inside service : "+this.allHotel);
      return this.http.get<HotelDTO[]>(`${this.allHotel}`);
  }
  

}//end class
