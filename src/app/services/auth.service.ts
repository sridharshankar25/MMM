import { Injectable } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { TraditionalComponent } from './../traditional/traditional.component';

@Injectable({
    providedIn: 'root'
  })
  export class AuthServices {
    auth1:boolean;
    constructor(private  auth : HeaderComponent ) {
        this.auth1=auth.isauth();
    }

    isauths()
    {
        return this.auth1;
    }
}
