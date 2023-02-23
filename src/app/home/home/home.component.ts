import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  userName:any;
  ngOnInit(): void {
  }

  refreshDashboard(){
    if(localStorage.getItem('rr_email')){
      this.userName = localStorage.getItem('rr_email')?.toString();
    }else{
      this.userName = "אורח";
    }
    let role = localStorage.getItem("rr_userType");
    if(role == "Restaurant"){
      
    }

  }
}
