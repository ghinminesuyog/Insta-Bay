import { Component, OnInit, Input } from '@angular/core';
import { ShopItemsService } from "../shop-items.service";
import { Product } from 'src/models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  constructor(
    private service: ShopItemsService,
    private route: Router
  ) { }

  // product : Product;

  @Input() item: Product;
  shop;

  ngOnInit(): void {


  }

  viewProduct() {
    console.log("Obtained  : ", this.item);
    var id = String(this.item.id)
    this.route.navigate(['/' + id, ])

  }
}
