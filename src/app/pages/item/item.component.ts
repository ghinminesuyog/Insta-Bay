import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/models/product';
import { ShopItemsService } from "../../pages/shop/shop-items.service";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Product = new Product('', '', '', 0, '', '');
  prevPrice: number = 0;
  alreadyInCart = false;  
  alreadyInList = false;

  constructor(
    private route: ActivatedRoute,
    private _shopService: ShopItemsService
  ) {
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params.id;

    this._shopService.getProduct(id).subscribe(
      (res) => {
        var product = new Product(res["id"], res["title"], res["description"], res["price"], res["imageURL"], res["category"]);
        this.item = product
      }
    )
    this.alreadyInCart = this._shopService.checkCart(this.item);


  }

  addToCart() {
    this.alreadyInCart = this._shopService.checkCart(this.item);

    if (this.alreadyInCart) {
      this._shopService.removeFromCart(this.item);
    } else {
      this._shopService.moveToCart(this.item)
    }

    this.alreadyInCart = this._shopService.checkCart(this.item);


  }

}
