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

  @Input() item: Product;
  prevPrice :number = 0;

  constructor(
    private route: ActivatedRoute,
    private _shopService: ShopItemsService
  ) {
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params.id;
    // this.item.id = id;
    // var desc = this.route.snapshot.params.description;
    // var price = this.route.snapshot.params.price;
    // var title = this.route.snapshot.params.title;
    // var image = this.route.snapshot.params.image;
    // var cat = this.route.snapshot.params.category



    // this.prevPrice = Number(( Number(price) * 49/100 + Number(price)).toFixed(3));

    this._shopService.getProduct(id).subscribe(
      (res) => {
        var product = new Product(res["id"], res["title"], res["description"], res["price"], res["imageURL"], res["category"]);
        this.item = product
      }
    )

    // this.item = new Product(id, title, desc, price, image, cat)

  }

}
