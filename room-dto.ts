export class RoomDto {

    roomId:number;
    roomNo:string;
    
    hotelId:number;
    hotelName:string;
    roomType:string;
   ratePerDay:number;
   imageName:string;
   isAvailable:string;
   
   

   constructor( roomId:number,roomNo:string,hotelId:number,
    hotelName:string,
    roomType:string,
    ratePerDay:number,
    imageName:string,
    isAvailable:string,
    ){

        this.roomId=roomId;
   this.roomNo=roomNo;
   this.hotelId=hotelId;
   this.hotelName=hotelName;
   this.roomType=roomType;
   this.ratePerDay=ratePerDay;
   this.imageName=imageName;
   this.isAvailable=isAvailable;
   
   

    }
}