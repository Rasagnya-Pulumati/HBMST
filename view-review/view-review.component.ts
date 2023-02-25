import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewDTO } from '../review-dto';
import { ReviewService } from '../review.service';
import { HotelDTO } from '../hotel-dto';
import { HotelReviewDto } from '../hotel-review-dto';
@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})

export class ViewReviewComponent    {

  allHotels: HotelDTO[] = [];
  allReviews: HotelReviewDto  [] = [];
  a=0;
  reviewForHotel=0;
  constructor( private reviewService: ReviewService) {

  }
  showReview:boolean=false;

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