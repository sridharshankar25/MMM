import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
// declare var $: any; 
// import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgsRevealConfig],
})
export class HomeComponent implements OnInit {

  constructor() { }

    ngOnInit(): void {

      
        // $('[data-toggle="popover"]').popover();   
      
  }


  
}
export class AppComponent {
  constructor(config: NgsRevealConfig) {
    // customize default values of ngx-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
 
    //other options here
  }
}


