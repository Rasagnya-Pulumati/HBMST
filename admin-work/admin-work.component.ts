
import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';

import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit{
 
   h:Hotel = new Hotel("hyd","taj","8-9-33","good",1200,"hotel@gmail.com","876545679",4,"https://hotel.com","emerald.jpg");

   //allHotel : Array<Hotel> = [];
   router:Router;


  constructor(private hotelService:HotelOperationService,router:Router,private activatedRouter:ActivatedRoute)
  
   {
    this.router=router;

   }

  ngOnInit(): void {
  }
  submitForm(){
   
    console.log("form submit button clicked")
    console.log(this.h);
    //console.log(this.allHotel.length);
    this.doSaveTOServer();
   }

   doSaveTOServer()
   {
    this.hotelService.createHotel(this.h).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          localStorage.removeItem('hotelId')
          localStorage.removeItem('hotelname')

    localStorage.setItem("hotelId",data.hotelId+"");
    localStorage.setItem("hotelname",data.hotelName);
      },
      error => {
        console.log(error);
        
      }
     );
    
    this.router.navigate(['addroom']);
  }
  

  //localstorage


}