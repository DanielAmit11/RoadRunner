import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

export interface IRestaurant{
  id:number;
  name:string;
  additionalName:string;
  description:string;
  country?:string;
  city:string;
  street:string;
  houseNumber:string;
  phone:string;
  email:string;
  active:boolean;
}