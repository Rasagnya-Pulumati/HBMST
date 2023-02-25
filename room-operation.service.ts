import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoomDto } from './room-dto';
@Injectable({
  providedIn: 'root'
})
export class RoomOperationService {

  constructor(private http:HttpClient) { }

  baseURL:string = 'http://localhost:2004';
  endpoint=this.baseURL+'/roomDetails/add';
  allRoomsbyhId=this.baseURL+'/roomDetails/hotelId'
  

  addRoom(room:Room):Observable<Object>
  {
    
    console.log('Room Service - Create Room called ');
    return this.http.post<Room>(`${this.endpoint}`,room);
  }
getRoomsByHotelId(hotelId:number):Observable<RoomDto[]>{
  console.log("Inside Method 1"+this.allRoomsbyhId);
  this.allRoomsbyhId=this.allRoomsbyhId+'/'+hotelId;
  console.log("After adding Id"+this.allRoomsbyhId);
  return this.http.get<RoomDto[]>(`${this.allRoomsbyhId}`);
  }
}


