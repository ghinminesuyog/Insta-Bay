import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../../../models/product";
import { map } from 'rxjs/operators';


// Using : 
// https://fakestoreapi.com/docs

@Injectable({
  providedIn: 'root'
})



export class ShopItemsService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  // products: Product[] = [];

  getProduct(id) {

    console.log('In get prod')

    var item: Product;

    return this._httpClient.get(`https://5f1fee61fba6d400169d4630.mockapi.io/product/${id}`)
    


    // return item;

  }


  generateProducts() {
    var products: Product[] = []

    return this._httpClient.get('https://5f1fee61fba6d400169d4630.mockapi.io/product')
  }
}
