import { Component,OnInit} from '@angular/core';
import { Room } from '../room';

import { RoomOperationService } from '../room-operation.service';
@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit{

  r:Room = new Room(0,'',0,'','',0,'','');
hotelId:number=0;
hotelName:string='';
  constructor(private hotelService:RoomOperationService)
  
   {
    let abc:string=localStorage.getItem("hotelId") || '';
    this.r.hotelId=parseInt(abc);
    this.r.hotelName=localStorage.getItem("hotelName") || '';


   }

  ngOnInit(): void {
  }
  submitForm(){
   
    console.log("form submit button clicked")
    console.log(this.r);
    //console.log(this.allHotel.length);
    this.doSaveTOServer();
   }

   doSaveTOServer()
   {
    this.hotelService.addRoom(this.r).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }


}