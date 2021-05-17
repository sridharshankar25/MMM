import { Router } from '@angular/router';
import { User } from './../auth/user.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  private userSub:Subscription;
  
  Router: any;
  isauth1:boolean;
  isAuthenticated: boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})
    


    this.userSub=this.authService.user.subscribe(user =>
      {
          this.isAuthenticated=!!user;
          // localStorage.setItem(this.isauth1, this.isAuthenticated);
          console.log(!user);
      }
      );
  
    
  }


  myFunction() {
    var x = document.getElementById("navDemo");
   if (x.className.indexOf("w3-show") == -1) {
     x.className += " w3-show";
   } else {
     x.className = x.className.replace(" w3-show", "");
   }
  }

  
  
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
    
  }
  isauth(){
    return this.isAuthenticated;
  }

}
