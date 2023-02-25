import { Component, OnInit } from '@angular/core';
import { HotelDTO } from '../hotel-dto';
import { HotelOperationService } from '../hotel-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
 hotel:HotelDTO=new HotelDTO(0,'','','','',0,'','',0,'','');
  allHotels:HotelDTO[]=[];
  router:Router;
  constructor(private hotelServive:HotelOperationService,router:Router,private activatedRouter:ActivatedRoute ){
    this.router=router;
  }

  ngOnInit(): void {
  }

  getAllHotels(){
  this.hotelServive.getAllHotelsFromSpring().subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHotels = data;
    },err=>{
      console.log("error from spring ",err);

    } 
  );

  }

  
  
}
