import { Component, OnInit } from '@angular/core';
import { RoomOperationService } from '../room-operation.service';
import { RoomDto } from '../room-dto';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
 
   

   allRooms:RoomDto[]=[];
   router:Router;


  constructor(private roomService:RoomOperationService,router:Router,private activatedRouter:ActivatedRoute)
  
   {
    this.router=router;

   }

  ngOnInit(): void {
  }
  

  getByHotelId(hotelId:string)
   {
    this.roomService.getRoomsByHotelId(parseInt(hotelId)).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          this.allRooms=data;
      },
      error => {
        console.log(error);
        
      }
     );
    
    
  }
  
  

  


}