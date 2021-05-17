import { Component, OnInit } from '@angular/core';
import { ProductListService } from './../services/product-list.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  constructor(private pls:ProductListService ,
    private cartService: CartService,) { }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.pls.addItem(product);
    window.alert('Your product has been added to the cart!');
    console.log(product);
    this.cartService.onDisplay();
    console.log("calling");
    console.log(JSON.stringify(this.pls.getservices(product)));
  }
}
