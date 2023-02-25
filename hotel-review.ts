export class HotelReview {

    id : number;
    hotelId : number;
    numberOfStars :number;
    content :string;

    constructor(id:number, hotelId : number, numberOfStars :number, content :string ){

        this.id = id;
        this.hotelId = hotelId;
        this.numberOfStars = numberOfStars;
        this.content = content;

    }
}