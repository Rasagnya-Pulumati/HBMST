import { Injectable } from '@angular/core';

interface AppUser{
  username:string;
  password:string;
  role:string;
  photo:string;
  
 
}

interface Hotel{
  hotelId:number;
  hotelName:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataOperationService {

  allAppUsers:AppUser[] = [];
  allHotels:Hotel[]=[];
  constructor() { 
    let user1:AppUser = {
      username:"rasagnya",
      password : "123",
      role:"User",
      photo:"user.jpg"
    }
    let user2:AppUser = {
      username:"ridita",
      password : "123",
      role:"Instructor",
      photo:"ridita.JPG"
    }
    let user3:AppUser = {
      username:"suresh",
      password : "123",
      role:"Student",
      photo:"suresh.JPG"
    }
    let user4:AppUser = {
      username:"ramesh",
      password : "123",
      role:"Student",
      photo:"ramesh.JPG"
    }
    let user5:AppUser = {
      username:"admin",
      password : "admin",
      role:"admin",
      photo:"admin.jpg"
    }

    this.allAppUsers = [user1,user2,user3,user4,user5];


  }

  doLogin(ipUsername:string,ipPassword:string):boolean
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')
    

    
    
    console.log("inside Service : "+ipUsername+" & "+ipPassword);
   
    for(let i=0;i<this.allAppUsers.length;i++)
    {
       let thisUser:AppUser = this.allAppUsers[i];

       if(thisUser.username == ipUsername && thisUser.password == ipPassword)
       {

          localStorage.setItem("username",ipUsername);
          localStorage.setItem("role",thisUser.role);
          localStorage.setItem("loginStatus",true+'');
          localStorage.setItem("photo",thisUser.photo);
          
          
          console.log("inside service for true ");
          
          return true; // note the break is not applicable in forEach because of window property
       }

    }

    

   
    return false;
    
  } //end of doLogin

  doUserLogout()
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')

    console.log("inside Service logout ");

  }

  doStore(hId:string,hotelName:string){
    localStorage.removeItem('hotelId')
    localStorage.removeItem('hotelname')

    localStorage.setItem("hotelId",hId);
    localStorage.setItem("hotelname",hotelName);
  }


}
