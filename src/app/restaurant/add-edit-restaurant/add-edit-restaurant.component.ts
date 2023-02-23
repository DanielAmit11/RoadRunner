import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IRestaurant } from '../restaurant.component';

@Component({
  selector: 'app-add-edit-restaurant',
  templateUrl: './add-edit-restaurant.component.html',
  styleUrls: ['./add-edit-restaurant.component.css']
})
export class AddEditRestaurantComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input() rest:IRestaurant;
restView:IRestaurant;
  ngOnInit(): void {

    this.restView = {
    id: this.rest.id,
    name : this.rest.name,
    additionalName : this.rest.additionalName,
    description : this.rest.description,
    country : this.rest.country,
    city : this.rest.city,
    street : this.rest.street,
    houseNumber : this.rest.houseNumber,
    phone : this.rest.phone,
    email : this.rest.email,
    active : this.rest.active
  };
  }

  addRestaurant(){

    let newRest:IRestaurant = {
      id : this.restView.id ,
      name : this.restView.name ,
    additionalName : this.restView.additionalName ,
    description : this.restView.description ,
    city : this.restView.city ,
    street : this.restView.street ,
    houseNumber : this.restView.houseNumber ,
    phone : this.restView.phone ,
    email : this.restView.email ,
    active : this.restView.active 
    }
    

    this.service.addRestaurant(newRest).subscribe(data=>{
      alert(data.toString());
    })
  }

  editRestaurant(){
this.service.UpdateRestaurant(this.restView).subscribe(data =>{
  alert(data.toString());
})
  }
  }

 

