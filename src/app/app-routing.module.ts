import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { OrderComponent } from './order/order.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoleGuard } from './role.guard';
const routes: Routes = [
  {path:'account', component:AccountComponent,canActivate:[RoleGuard]},
  {path:'restaurant', component:RestaurantComponent,canActivate:[AuthGuard]},
  {path:'order', component:OrderComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
