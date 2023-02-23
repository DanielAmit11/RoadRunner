import { Component, OnInit ,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IUser } from '../account.component';
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { 
    console.log("app-add-edit-user - constructor")
  }
  typeList:any;
  UserId:any = "!";
  userName:string;
  password:string;
  active: boolean;
  phone: string;
  email: string;
  type: string;
  
  @Input() usr :IUser;
  


  ngOnInit(): void {
this.typeList=this.service.getTypeListOfUser();

console.log(this.typeList)

    this.UserId= this.usr.id;
    this.userName= this.usr.userName;
    this.password= this.usr.password;
    this.active= this.usr.active;
    this.phone= this.usr.phone;
    this.email= this.usr.email;
    this.type= this.usr.type;
 
  }


  AddUser(){
    var newUser:IUser = {
      id:this.UserId,
      userName:this.userName,
      password:this.password,
      active:this.active,
      phone:this.phone,
      email:this.email,
      type:this.type
    }
    this.service.addUser(newUser).subscribe(res=>{
alert(res.toString());

    });
  }

  EditUser(){
    var newUser = {
      Id:this.UserId,
      userName:this.userName,
      Password:this.password,
      Active:this.active,
      Phone:this.phone,
      Email:this.email,
      Type:this.type
    }
    this.service.UpdateUser(newUser).subscribe(res=>{
alert(res.toString());

    });
  }
onChange(event: any){
  this.type =event;

}


}

