import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';
import { HotelDTO } from '../hotel-dto';
import { ReviewService } from '../review.service';
import { RoomOperationService } from '../room-operation.service';
import { HotelReviewDto } from '../hotel-review-dto';
import { RoomDto } from '../room-dto';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent  {
 // hotel:HotelDTO=new HotelDTO(0,'','','','',0,'','',0,'','');
  allHotels:HotelDTO[]=[];

  allRooms:RoomDto[]=[];
  allReviews: HotelReviewDto  [] = [];
  a=0;
  reviewForHotel=0;
  showReview:boolean=false;
  
  constructor(private hotelServive:HotelOperationService,private reviewService: ReviewService,private roomService: RoomOperationService ){
   
  }


  getByCity(city:string){
    this.hotelServive.getHotelsDetailsbyCity(city).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allHotels = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
    }
  viewRooms(hotel:number){
    
    this.roomService.getRoomsByHotelId(hotel).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          this.allRooms=data;
      },
      error => {
        console.log(error);
        
      }
     );
     
    
    
  }
  
  goForReview(hotel:number)
    {
      
      this.reviewService.getReviewByHotelId(hotel).subscribe(
        data=>{
          this.allReviews = data;
          this.showReview = true;
          let sum=0;
  
      for (var j = 0; j < this.allReviews.length; j++){
        sum += this.allReviews[j].starRating;
        
        
  
        }
  
  
        this.a=sum/this.allReviews.length;
  
        console.log(this.allReviews);
        console.log(this.a);
        }
  
      )
      
      let sum=0;
      for (var j = 0; j < this.allReviews.length; j++){
        sum += this.allReviews[j].starRating;
        
        
        }
        this.a=sum/this.allReviews.length;
  
  
      }

    }
  

