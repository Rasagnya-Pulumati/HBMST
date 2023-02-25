import { Component } from '@angular/core';
import { Review } from '../review';
import { ReviewDTO } from '../review-dto';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  model:Review = new Review(0,0,0,'');
  submitted = false;
  success = false;
  error = false;
  starRating = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  allReviews:ReviewDTO[]=[]
  hotelId:number=0;
  // hotelName:string='';
  constructor(private reviewService: ReviewService) {
    let abc:string=localStorage.getItem("hotelId") || '';
    this.model.hotelId=parseInt(abc);
    //this.r.hotelName=localStorage.getItem("hotelName") || '';
  }

    onSubmit() 
    {
    this.reviewService.submitReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="flight review submitted";

      },
      error=>{
        console.log("Error"+error);
     }

    );
  
    }
  }

