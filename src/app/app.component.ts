import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,  AfterViewInit {
  constructor(private auth:AuthService ,private router:Router){}
  ngAfterViewInit(): void {
    this.refreshUserName();
  }
  isloggedIn:boolean = false;
userName:any;
imageToAdd = "./../img/rr.png";
userType:any;
  ngOnInit(): void {
    this.isloggedIn= this.auth.IsLoggedIn();
    this.userType = localStorage.getItem('rr_userType')?.toString()
  }
  title = 'RR';


LogOut(){
    localStorage.removeItem('rr_userId');
    localStorage.removeItem('rr_email');
  localStorage.removeItem('rr_userType');
  localStorage.removeItem('rr_token');

   this.router.navigate(['login']);
    this.refreshUserName();
}
refreshUserName(){
  if(localStorage.getItem('rr_email')){
    this.userName = localStorage.getItem('rr_email')?.toString();
  }else{
    this.userName = "אורח";
  }
}

getLogo(){

  return  "<img src=./../img/rr.png  />";
}
getYear(){
  return new Date().getFullYear();
}
}



export class ITranslateIL{
  readonly txtRequierd = "שדה חובה"; 
  readonly txtEmail = "אימייל לא תקין"; 
  readonly txtMinLength ="הכנס לפחות 6 תווים";
  

}
