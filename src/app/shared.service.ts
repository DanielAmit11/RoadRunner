import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private activeModelUser = new BehaviorSubject<boolean>(true);
  CurrentActiveModelUser = this.activeModelUser.asObservable();
  ChangeModelUser(active: boolean){
    this.activeModelUser.next(!active);
  }
  readonly requiredField ="שדה חובה !"
  readonly TypeOfUser = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Restaurant' },
    { id: 3, name: 'Delivery' }
  ];
  readonly APIUrl = "http://roadrunner.somee.com/api";
  //readonly APIUrl = "https://localhost:44390/api";
  
  constructor(private http:HttpClient) { }

  login(u:any, p:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Account/Login/"+u+"/"+p); 
  }
  getUserList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Account"); 
  }
  getUserById(val:any): Observable<any>{
    return this.http.get<any>(this.APIUrl  + "/Account/" +val); 
  }
  addUser(val:any){
    return this.http.post(this.APIUrl + "/Account",val); 
  }
  UpdateUser(val:any){
    return this.http.put(this.APIUrl + "/Account",val); 
  }
  deleteUser(val:any){
    return this.http.delete(this.APIUrl + "/Account/" + val); 
  }

  getUserRestaurantList(val:any): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Account/GetRestaurantListByUserId/" + val); 
  }

  getTypeListOfUser(): any[]{
    return this.TypeOfUser;
}
  //UserRestaurant
  addUserRestaurant(val:any){
    return this.http.post(this.APIUrl + "/UserRestaurant",val); 
  }

  deleteUserRestaurant(val:any){
    return this.http.delete(this.APIUrl + "/UserRestaurant/"+val.userId + "/"+ val.restaurantId ); 
  }


  getDeliveryList(): Observable<any>{
    return this.http.get<any>(this.APIUrl  + "/Account/getDeliveryList"); 
}

//Restaurant
getRestaurantList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + "/Restaurant"); 
}
addRestaurant(val:any){
  return this.http.post(this.APIUrl + "/Restaurant",val); 
}
UpdateRestaurant(val:any){
  return this.http.put(this.APIUrl + "/Restaurant",val); 
}
deleteRestaurant(val:any){
  return this.http.delete(this.APIUrl + "/Restaurant/" + val); 
}

//Order
getOrderList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + "/Order"); 
}
GetOrdersByTypeAndQuantity_ByUserId(type:string , quantity:any , userId:any): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + "/Order/GetOrdersByTypeAndQuantity_ByUserId/"+type +"/"+ quantity +"/"+ userId ); 
}
GetOrdersByTypeAndQuantity(type:string , quantity:any): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + "/Order/GetOrdersByTypeAndQuantity/"+type +"/"+ quantity ); 
}
addOrder(val:any){
  return this.http.post(this.APIUrl + "/Order",val); 
}
UpdateOrder(val:any){
  return this.http.put(this.APIUrl + "/Order",val); 
}
deleteOrder(val:any){
  return this.http.delete(this.APIUrl + "/Order/" + val); 
}
updateDeliveredOrderDateTime(id:any, ):Observable<any[]>{
  return this.http.get<any>(this.APIUrl + "/Order/updateDeliveredOrderDateTime/"+id); 
}
}
