import { Injectable } from '@angular/core';
// import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];
    
    
  constructor() {
    

  }

  addToCart(product) {
    this.items.push(product);
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  onDisplay()
  {
      console.log(this.items);
  }

}