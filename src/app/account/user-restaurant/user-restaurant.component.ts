import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IUserRestaurant } from '../account.component';
@Component({
  selector: 'app-user-restaurant',
  templateUrl: './user-restaurant.component.html',
  styleUrls: ['./user-restaurant.component.css']
})
export class UserRestaurantComponent implements OnInit {

  currRest:number;
  restaurantList:any =[];
  restaurantListExist:any=[];
  userRestList:any =[];
  userRestaurant:IUserRestaurant;
  constructor(private service:SharedService) { }
@Input() user:any;
  ngOnInit(): void {
    this.refreshList();
    this.userRestaurant ={
      userId : this.user.id,
      restaurantId: 0};
  }

  refreshList(){
   

this.service.getRestaurantList().subscribe(data=>{
this.restaurantList =data;
});

this.service.getUserRestaurantList(this.user.id).subscribe(data=>{
  this.userRestList = data;

  this.restaurantListExist =[];
  this.userRestList.forEach((element: { restaurantId: any; }) => {
    this.restaurantList.forEach((r: { id: any; }) => {
    if(element.restaurantId === r.id){
      this.restaurantListExist.push(r);
    }
      
    });
  });
 
});

  }
  onChange(event: any){
    this.currRest =event;
  
  }

  addRestToUser(){
    var x: number = +this.currRest;
    this.userRestaurant.restaurantId = x;
    this.service.addUserRestaurant(this.userRestaurant).subscribe(res=>{
      alert(res.toString());
    this.refreshList();

          });
  }

  deleteClick(val: any){
    this.userRestaurant.restaurantId = val.id;
  this.service.deleteUserRestaurant(this.userRestaurant).subscribe(data=>{
    alert(data.toString());
    this.refreshList();

  })
      }
      

}
