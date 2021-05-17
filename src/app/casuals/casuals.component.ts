import { Component, OnInit } from '@angular/core';
import { CartService } from './../services/cart.service';
// import { Component, OnInit } from '@angular/core';
import { ProductListService } from './../services/product-list.service';
@Component({
  selector: 'app-casuals',
  templateUrl: './casuals.component.html',
  styleUrls: ['./casuals.component.css']
})
export class CasualsComponent implements OnInit {

  constructor(private pls:ProductListService ,
    private cartService: CartService

  ) { }

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
