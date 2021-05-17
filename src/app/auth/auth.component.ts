import { TraditionalComponent } from './../traditional/traditional.component';
import { AuthService } from './auth.service';
 import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode=true;
  error:string=null;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode;


  }
  OnSubmit(form:NgForm)
  {
    if(!form.valid)
    {
      return;
    }

    const email=form.value.email;
    const password=form.value.password;
if(this.isLoginMode)
{
  this.authService.login(email,password).subscribe(
    resData => {
    console.log(resData);
    this.router.navigate(['/traditional']);

  },
  errorRes =>{
    console.log(errorRes);
    this.error="An error occured !!" // <-- Look this line
  }
  
  );

}
else{
  this.authService.signup(email,password).subscribe(
    resData => {
    console.log(resData);
    this.router.navigate(['/traditional'])

  },
  errorRes =>{
    console.log(errorRes);
    this.error="An error occured !!"   // <-- Look this line
  }
  
  );
}
form.reset();

  }

}
