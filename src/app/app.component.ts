import { Component } from '@angular/core';
// import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [NgsRevealConfig] 
})
export class AppComponent {
  title = 'triplem-app';


    onActivate(event)
    {
      window.scroll(0,0);
    }
  }
