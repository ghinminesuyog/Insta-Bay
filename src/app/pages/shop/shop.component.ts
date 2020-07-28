import { Component, OnInit } from '@angular/core';
import { ShopItemsService } from "../shop/shop-items.service";
import { Product } from 'src/models/product';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items: Product[] = [];
  constructor(
    private _shopService: ShopItemsService
  ) { }

  ngOnInit(): void {
    this.items = []
    this._shopService.generateProducts()
      .subscribe(
        (res: any[]) => {
          console.log("Result is : ", res)
          res.map(item => {
            var product = new Product(item["id"], item["title"], item["description"], item["price"], item["imageURL"], item["category"]);
            console.log(product)
            this.items.push(product)
          }
          )
        }
      );
  }

}
