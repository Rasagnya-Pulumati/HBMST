import { Component } from '@angular/core';
import { BookingDto } from '../booking-dto';
import { BookingOperationService } from '../booking-operation.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {


  allBookings:BookingDto [] = [];
  constructor(private orderService: BookingOperationService)
  {
    orderService.getAllBookingsFromSpring().subscribe(
      data=>{
          this.allBookings = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }

  

}
