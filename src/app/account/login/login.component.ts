import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITranslateIL } from 'src/app/app.component';
import { AuthService } from 'src/app/auth.service';
import { SharedService } from 'src/app/shared.service';
import { IUser } from '../account.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted = false;
  iTranslateIL:ITranslateIL = new ITranslateIL();
  constructor(private service:SharedService,private auth:AuthService , private router:Router , private formBuilder: FormBuilder) { 
        //validate
        this.loginForm =  this.formBuilder.group({
          email: new FormControl('',[Validators.required ]),
          password: new FormControl('',[Validators.required])
        });
  }
get f(){ return this.loginForm.controls;}

  user: any;
  userList:any =[];
  userInfo:any;
  message: string;
  isLogin:any = false;
  ngOnInit(): void {
    console.log(this.iTranslateIL);
    if(this.auth.IsLoggedIn()){
      this.router.navigate(['order']);
    }
    this.user = {
      Id:0,
      Name:"",
      Password:"",
      Active:false,
      Phone:"",
      Email:"",
      Type:""
    }
    this.message= "";
    


  }
  onSubmit(login :any){
    console.log("Form Submitted" , login);
    this.submitted = true;

  }
  Login(){
    if (!this.loginForm.invalid){
      
    
     
    
    
    localStorage.removeItem('rr_token');

this.service.login(this.user.Email, this.user.Password).subscribe(data=>{
  this.userList = data;
  if(data.length == 0  ){
    this.message = "פרטי ההתחברות שגויים. נסה שנית.";

    localStorage.removeItem('rr_userId');
    localStorage.removeItem('rr_email');
    localStorage.removeItem('rr_userType');
    localStorage.removeItem('rr_token');
  }else{

  this.userInfo = this.userList[0];
  if(this.userInfo.id != 0 && this.userInfo.active ){
    
    this.message = "מחובר";
    localStorage.setItem('rr_userId',this.userInfo.id);
    localStorage.setItem('rr_email',this.userInfo.email);
    localStorage.setItem('rr_userType',this.userInfo.type);
    localStorage.setItem('rr_token',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTc3ODQ0MTgsIm");
    window.location.reload();
    this.router.navigate(['order']);
  }
  this.message = "משתמש לא פעיל.";
}
  


});
  }

}
}
