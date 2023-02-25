import { Component } from '@angular/core';
import { Hotel } from '../hotel';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  h:Hotel=new Hotel("hyd","taj","8-9-33","good",1200,"hotel@gmail.com","876545679",4,"https://hotel.com","emerald.jpg");
  allHotels:Hotel[]=[];
  constructor(){

  }

}
