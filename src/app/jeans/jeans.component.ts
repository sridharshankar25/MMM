import { Component, OnInit } from '@angular/core';
import { ProductListService } from './../services/product-list.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {

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
