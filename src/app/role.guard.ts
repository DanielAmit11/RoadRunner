import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
  let role = localStorage.getItem("rr_userType");
  if(role == "Admin"){
    return true;
  }
  alert("אין לך הרשאות מנהל");    
    return false;
  }
  
}
