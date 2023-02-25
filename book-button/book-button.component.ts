import { Component } from '@angular/core';
import { AddBook } from '../add-book';
import { BookingOperationService } from '../booking-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookingDto } from '../booking-dto';
@Component({
  selector: 'app-book-button',
  templateUrl: './book-button.component.html',
  styleUrls: ['./book-button.component.css']
})
export class BookButtonComponent {
  today: string = new Date().toISOString().slice(0, 10);
  model: AddBook = new AddBook(0,'',0,0,0,0,0,0,0);
  submitted = false;
  success = false;
  error = false;
  
  status = false;
  message = '';
  router:Router;
  allBookings:BookingDto[]=[];
  allreviews:BookingDto[]=[];
  constructor(private bookingService:BookingOperationService,router:Router,private activatedRouter:ActivatedRoute) {
    this.router=router;
  }

  onSubmit() {
    this.bookingService.submitBookingDetails(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="Booking submitted";

      },
      error=>{

      }
      // this.navigate(['bookingdetails']);
      

    );
    //this.router.navigate(['bookingdetails']);

 
  }
  viewdetails(booking:number){
    
    this.bookingService.getBookingsById(booking).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          this.allBookings=data;
      },
      error => {
        console.log(error);
        
      }
     );
     
    
    
  }

  


}

