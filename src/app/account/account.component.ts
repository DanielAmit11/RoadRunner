import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


export interface IUser{
  id:number;
  userName:string;
  password:string;
  phone:string;
  email:string;
  type:string;
  active:boolean;
}
export interface IUserRestaurant{
  userId:number;
  restaurantId:number;
}