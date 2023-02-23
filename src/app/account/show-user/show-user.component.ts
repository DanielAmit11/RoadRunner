import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IUser } from '../account.component';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  userList:any =[];
  ActivateModelAddUser : boolean = false;
  ModalTitle:string;
  usr:IUser ;
  user:any ;

  ngOnInit(): void {
    this.refreshUser();
    
  }

  refreshUser(){
    this.service.getUserList().subscribe(data => {
      this.userList = data;
    });
    this.service.getUserById(1).subscribe(data => {
      this.user = data;
    });
  }

  addClick(){
    this.ActivateModelAddUser = true;
    this.ModalTitle = "הוסף משתמש";
    this.usr = { 
      id: 0,
      userName: "",
    password: "",
    active: true,
    phone: "",
    email: "",
    type: ""}
  }

  closeClick(){
    this.ActivateModelAddUser = false;
    this.refreshUser();

  }

  editClick(item: any){
    this.ActivateModelAddUser = true;
    this.ModalTitle = "ערוך משתמש";
    this.usr = item;
  
      }

  deleteClick(val: any){
    if(confirm("למחוק משתמש?"))
    this.service.deleteUser(val).subscribe(data => {
     alert(data.toString());
     this.refreshUser();
    });
  
      }

}
