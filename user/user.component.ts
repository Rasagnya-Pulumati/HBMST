import { Component } from '@angular/core';

import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   // no need to write @Autowire bcoz service class is already @Injectable
  __hotelService:HotelOperationService; // creating object of Service layer
  router:Router;
  
  allHotel : Array<Hotel> = [];
  constructor(hotelService:HotelOperationService,router:Router)
  {
    this.__hotelService = hotelService;
    //this.allHotel = this.__hotelService.getHotelArr();
    this.router = router;
    console.log(this.allHotel.length);
  }

  

  

  

  /*getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allHotel = this.__hotelService.getHotelsByLocation(filterValue);
  }*/


}//end class
