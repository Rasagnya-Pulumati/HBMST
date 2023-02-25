export class HotelDTO {
    hotelId:number;
    city:string;
    hotelName:string;
    address:String;
    description:string;
    avgRatePerDay:number;
    email:string;
    phone:string;
    starRating:number;
    website:string;
    imageName:string

    

    constructor(
        hotelId:number,
        city:string,
        hotelName:string,
        address:String,
        description:string,
        avgRatePerDay:number,
        email:string,
        phone:string,
        starRating:number,
        website:string,
        imageName:string
        
        
    )
    {
          this.hotelId=hotelId;
          this.city=city;
          this.hotelName=hotelName;
          this.address=address;
          this.description=description;
          this.avgRatePerDay=avgRatePerDay;
          this.email=email;
          this.phone=phone;
          this.starRating=starRating;
          this.website=website;
          this.imageName=imageName

    }

}//end of class