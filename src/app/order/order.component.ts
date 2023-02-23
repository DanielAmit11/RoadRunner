import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


export interface IOrder{
  id:number | null;
  userId:number | null;
  restaurantId:number | null;
  name:string;
  description:string;
  phone:string;
  remark:string;
  price:number | null;
  createDate:Date;
  sentDate:Date;
  arrivedDate:Date;
  city:string;
  street:string;
  houseNumber:number | null;
  floor?:number | null;
  apartment?:number | null;
  paid:boolean;
  active:boolean;
}