import { Component, Input, OnInit } from '@angular/core';
import { ITranslateIL } from 'src/app/app.component';
import { SharedService } from 'src/app/shared.service';
import { IOrder } from '../order.component';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {

  constructor(private service:SharedService) { }
  iTranslateIL:ITranslateIL = new ITranslateIL();
  submitted = false;

  userRestList: any = [];
  currRestID: any ;
  @Input() order:IOrder;
  orderView:IOrder;
  deliveryList:any=[];
  isRestaurantType:boolean = false;
  ngOnInit(): void {
    if(localStorage.getItem('rr_userType') == 'Restaurant')
    this.isRestaurantType =true;
this.refreshUserRestaurantList();


  }
  refreshUserRestaurantList(){
    this.service.getUserRestaurantList(localStorage.getItem('rr_userId')).subscribe(data=>{
      this.userRestList = data;
      
      if(this.isRestaurantType)
this.currRestID = this.userRestList[0].restaurantId;

this.refreshOrderView();
    });
    
  }
  refreshOrderView(){
    if(this.order.restaurantId == 0){
      this.order.restaurantId = this.currRestID;
    }
    this.orderView = this.order;
  }

  addRestaurant(){

     if(this.ValidateOrder()){
      this.service.addOrder(this.orderView).subscribe(data=>{
        alert(data.toString());
        
      })
     }

    
  }

  editRestaurant(){
    if(this.ValidateOrder()){
this.service.UpdateOrder(this.orderView).subscribe(data =>{
  alert("Edit");
})
    }
  }

  validName:boolean;
  validPhone:boolean;
  validStreet:boolean;
  validHouseNumber:boolean;
  
  ValidateOrder():boolean{
    this.submitted = true;
    this.validName=false;
    this.validPhone=false;
    this.validStreet=false;
    this.validHouseNumber=false;
    if (this.orderView.name != "" && this.orderView.name != null){
      this.validName=true;
    }
    if (this.orderView.phone != "" && this.orderView.phone != null){
      this.validPhone=true;
    }
    if (this.orderView.street != "" && this.orderView.street != null){
      this.validStreet=true;
    }
    if (this.orderView.houseNumber != null){
      this.validHouseNumber=true;
    }
    if (this.validName && this.validPhone && this.validStreet && this.validHouseNumber){
      return true;
    }else{
      return false;
    }
    
  }
}
