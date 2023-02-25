import { Component } from '@angular/core';
import { BookingDto } from '../booking-dto';
import { BookingOperationService } from '../booking-operation.service';
@Component({
  selector: 'app-booking-dto',
  templateUrl: './booking-dto.component.html',
  styleUrls: ['./booking-dto.component.css']
})
export class BookingDtoComponent {
  allBookings:BookingDto[]=[];

  constructor(private bookingService : BookingOperationService )
  {}

    // bookingService:getBookingsById().subscribe(
      
    //   data=>{
    //     this.allBookings = data;
    //   },
    //   err=>{
    //   console.log("error from spring ",err);

    getBookings(bookingId:string){
      this.bookingService.getBookingsById(parseInt(bookingId)).subscribe(
        data=>{
          console.log("data :- "+data);
         
          this.allBookings = data;
        },err=>{
          console.log("error from spring ",err);
  
    

    }
  );
}
}
