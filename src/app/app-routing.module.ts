import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthGuard } from './auth-guard.service';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { TobiasComponent } from './tobias/tobias.component';
import { LiamComponent } from './liam/liam.component';

const routes: Routes = [
  {path: '', component: ProductsComponent, pathMatch: 'full' },
  {path: 'formArrayExample', component: FormArrayExampleComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent },
  {path: 'login', component: LoginComponent },

  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard], children: [
    {path: 'tobias', component: TobiasComponent},
    {path: 'liam', component: LiamComponent}
  ]},

  {
    path: 'admin/products/new', 
    component: ProductFormComponent ,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products/:id', 
    component: ProductFormComponent, 
    canActivate: [AuthGuard, AdminAuthGuard] 
  },
  {
    path: 'admin/products', 
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  { 
    path: 'admin/orders', 
    component: AdminOrdersComponent, 
    canActivate: [AuthGuard, AdminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }