import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../../../models/product";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class ShopItemsService {

  cart: Product[] = []

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProduct(id) {
    return this._httpClient.get(`https://5f1fee61fba6d400169d4630.mockapi.io/product/${id}`)
  }


  generateProducts() {
    return this._httpClient.get('https://5f1fee61fba6d400169d4630.mockapi.io/product')
  }

  moveToCart(item) {
    this.cart.push(item);
    console.log('Added to cart')
  }

  checkCart(item: Product) {
    return this.cart.includes(item,0)
  }

  removeFromCart(item: Product) {
    this.cart.forEach((value, index) => {
      if (item.id == value.id) {
        this.cart.splice(index, 1);
        console.log('Removed from cart')
      }
    })
  }

}
