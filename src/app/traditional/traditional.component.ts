import { AuthServices } from './../services/auth.service';
import { HeaderComponent } from './../header/header.component';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from './../services/product-list.service';



declare var $: any; 

@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.css']
})
export class TraditionalComponent implements OnInit {
  
 
  p=[];
  // auth1 :boolean = HeaderComponent.isAuthenticated;
  // ProductListService: any;
  constructor(private pls:ProductListService ,
    private cartService: CartService) {
      
   }

  ngOnInit(): void {

    $('[data-toggle="popover"]').popover();
    // this.p.push(this.pls.getService())
    console.log("this is pain");
    console.log(this.p)
  }

  addToCart(product) {
    this.pls.addItem(product);
    window.alert('Your product has been added to the cart!');
    console.log(product);
    this.cartService.onDisplay();
    console.log("calling");
    console.log(JSON.stringify(this.pls.getservices(product)));
  }

  

myFun() {
  var x = document.getElementById("nav1");
 if (x.className.indexOf("w3-show") == -1) {
   x.className += " w3-show";
 } else {
   x.className = x.className.replace(" w3-show", "");
 }
}


myFunction2() {
var x = document.getElementById("Demo");
if (x.className.indexOf("w3-show") == -1) {
  x.className += " w3-show";
} else {
  x.className = x.className.replace(" w3-show", "");
}
}

w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

 w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


myAccFun() {
  var x = document.getElementById("demoAc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}



}
