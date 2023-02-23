import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IOrder } from '../order.component';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  constructor(private service: SharedService) { }
  userRestList: any = [];
  userRestListID: any = [];
  orderList: any = [];
  filterOrderList: any = [];
  filterOrderList_Full: any = [];
  order: IOrder;
  ActivateModelAddOrder: boolean;
  ModalTitle: string;
  islistView: boolean;
  searchText: any;
  ngOnInit(): void {
    this.islistView = true;
    this.refreshOrdersToday_ByUserId();
  }

  refreshOrdersToday_ByUserId() {
    this.service.GetOrdersByTypeAndQuantity_ByUserId("day",-1,localStorage.getItem('rr_userId')).subscribe(data => {
      this.orderList = data;
      this.orderList = this.orderList.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
      this.filterOrderList = this.orderList;

    });
  }
 
  refreshOrdersByTypeAndQuantity_ByUserId(type:string , quantity:string) {
    this.service.GetOrdersByTypeAndQuantity_ByUserId(type,quantity,localStorage.getItem('rr_userId')).subscribe(data => {
      this.orderList = data;
      this.orderList = this.orderList.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
      this.filterOrderList = this.orderList;

    });
  }


  filterOrder() {
    this.filterOrderList = this.orderList.filter((order: { restaurantId: any; }) => this.userRestListID.includes(order.restaurantId))
    if (localStorage.getItem('rr_userType') == 'Admin') {
      this.filterOrderList = this.orderList;

    }

    this.filterOrderList = this.filterOrderList.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    this.filterOrderList_Full = this.filterOrderList;
    this.filterOrderList = this.filterOrderList.filter((today: { createDate: Date; }) => new Date(today.createDate).getDate() == new Date().getDate());
    

    if (localStorage.getItem('rr_viewOrder') == null)
{
  this.filterBy(0);
}else{
  this.filterBy(localStorage.getItem('rr_viewOrder'));
}
    
  
  }

  filterBy(val: any) {
    localStorage.setItem('rr_viewOrder',val);
    if (val == 1) {  this.refreshOrdersByTypeAndQuantity_ByUserId("year","-10")  }
    if (val == 2){  this.refreshOrdersToday_ByUserId()  }
    if (val == 3) {  this.refreshOrdersByTypeAndQuantity_ByUserId("week","-1")  }
    if (val == 4) {  this.refreshOrdersByTypeAndQuantity_ByUserId("month","-1")  }
  }
  getToday(d: Date) {
    d = new Date(d);
 
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(),0,0,0);
  }

  getFirstOfWeek(d: Date) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 0); // adjust when day is sunday
      console.log(new Date(d.getFullYear(), d.getMonth(), 1));
d = new Date(d.setDate(diff));
d= new Date(d.getFullYear(),d.getMonth() , d.getDate(),0,0,0);

    return new Date(d.getFullYear(),d.getMonth() , d.getDate(),0,0,0);
  }
  getFirstOfMonth(d: Date) {
    d = new Date(d);
 
    return new Date(d.getFullYear(), d.getMonth(), 1,0,0,0);
  }


  addClick() {
    this.ActivateModelAddOrder = true;
    this.ModalTitle = "הזמנה חדשה";
    this.order = {
      id: 0,
      userId: 0,
      restaurantId: 0,
      name: "",
      description: "",
      phone: "",
      remark: "",
      price: null,
      createDate: new Date,
      sentDate: new Date,
      arrivedDate: new Date,
      city: "",
      street: "",
      houseNumber: null,
      floor: null,
      apartment: null,
      paid: true,
      active: true
    }
  }

  closeClick() {
    this.ActivateModelAddOrder = false;
    this.refreshOrdersToday_ByUserId();
  }

  editClick(item: any) {
    this.ActivateModelAddOrder = true;
    this.ModalTitle = "ערוך הזמנה";
    this.order = item;
  }

  deleteClick(val: any) {
    if (confirm("למחוק הזמנה"))
      this.service.deleteOrder(val).subscribe(data => {
        alert(data.toString());
        this.refreshOrdersToday_ByUserId();
      });

  }

  DeliveredOrderClick(val: any) {
    this.service.updateDeliveredOrderDateTime(val).subscribe(data => {
      alert(data.toString());
      this.refreshOrdersToday_ByUserId();
    });
  }

  listViewClick() {
    this.islistView = true;

  }

  gridViewClick() {
    this.islistView = false;

  }
  filterSearch(obj: any) {
    console.log(obj);
  }

}
