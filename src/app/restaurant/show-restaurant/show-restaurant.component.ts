import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IRestaurant } from '../restaurant.component';
@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.css']
})
export class ShowRestaurantComponent implements OnInit {

  constructor(private service:SharedService ) { }
  restaurantList:any=[];
  filterRestaurantList:any=[];
  userRestList:any =[];
  userRestListID:any =[];
  ActivateModelAddRestaurant : boolean = false;
  ModalTitle:string;
  restaurant:IRestaurant ;
  ngOnInit(): void {

this.refreshUserRestaurantList();
   

  }
  refreshUserRestaurantList(){
    this.service.getUserRestaurantList(localStorage.getItem('rr_userId')).subscribe(data=>{
      this.userRestList = data;
      this.userRestList.forEach((element: { restaurantId: any; }) => {
this.userRestListID.push(element.restaurantId)
      });
    this.refreshRestaurantList();

    });
  }

  refreshRestaurantList(){
    this.service.getRestaurantList().subscribe(data=>{
      this.restaurantList = data;
      this.filterRest();
    });
  }
  addClick(){
    this.ActivateModelAddRestaurant = true;
    this.ModalTitle = "הוסף";
    this.restaurant = { 
      id: 0,
      name: "",
      additionalName: "",
      description: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      phone: "",
      email: "",
      active: true}
  }

  closeClick(){
    this.ActivateModelAddRestaurant = false;
    this.refreshRestaurantList();

  }

  editClick(item: any){
    this.ActivateModelAddRestaurant = true;
    this.ModalTitle = " ערוך";
    this.restaurant = item;
      }

  deleteClick(val: any){
    if(confirm("למחוק מסעדה?"))
    this.service.deleteRestaurant(val).subscribe(data => {
     alert(data.toString());
     this.refreshRestaurantList();
    });
  
      }

  filterRest(){
    if(localStorage.getItem('rr_userType')!='Admin')

    this.restaurantList = this.restaurantList.filter((rest: { id: any; }) => this.userRestListID.includes(rest.id))
  }

}

