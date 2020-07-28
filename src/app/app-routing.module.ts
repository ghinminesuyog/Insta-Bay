import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { ItemComponent } from './pages/item/item.component';


const routes: Routes = [
  {
    component: ShopComponent,
    path: ''
  },
  {
    component: ShoppingCartComponent,
    path: 'cart'
  },
  {
    component: WishListComponent,
    path:'wishlist'
  },
  {
    path: ':id',
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
