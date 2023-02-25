import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDto } from './booking-dto';
import { AddBook } from './add-book';


@Injectable({
  providedIn: 'root'
})
export class BookingOperationService {

 
  baseURL:string= 'http://localhost:2004';
  
  allBookingEndpoint = this.baseURL+'/booking/bookings';
  submitBookingDetailsEndPoint:string=this.baseURL+'/booking/add';

  getBookingById:string=this.baseURL+'/booking/view';

  
  //orderArr:OrderDTO[] = [];
  constructor(private http:HttpClient) { }

  bookingArr: AddBook[] =[];

  getAllBookingsFromSpring():Observable<BookingDto[]>
  {
    console.log("inside service : "+this.allBookingEndpoint);
      return this.http.get<BookingDto[]>(`${this.allBookingEndpoint}`);
  }

submitBookingDetails(addBook:AddBook ):Observable<AddBook>
 {

  console.log("inside method 1 : Booking added" +addBook);
  
  return this.http.post<AddBook>(`${this.submitBookingDetailsEndPoint}`,addBook);
  
}

getBookingArr():AddBook[]
{
  return this.bookingArr;

}

getFilterByDate(filterDate:number):AddBook[]
{
  let outputArr:AddBook[]=[];
 
  this.bookingArr.forEach(b=>{
    if(b.bookedFrom===filterDate)
    {
      // this.bookingArr.push(b);
      outputArr.push(b);
    }
  });

  // return this.bookingArr;
  return outputArr;
}

getBookingsById(bookingId:number):Observable<BookingDto[]>
{
  console.log("inside service : "+this.getBookingById);
  this.getBookingById = this.getBookingById+'/'+bookingId;
  console.log("after getting booking details 2"+this.getBookingById);
      return this.http.get<BookingDto[]>(`${this.getBookingById}`);

}
}

// getFilterByDate(filterDate: number): AddDetails[] {
//   let outputArr: AddDetails[] = [];
//   this.bookingArr.forEach(booking => {
//     if (booking.bookedFrom === filterDate) {
//       outputArr.push(booking);
//     }
//   });
//   return outputArr;
// }
// }
