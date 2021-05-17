// import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';


import {APP_BASE_HREF} from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { FormalsComponent } from './formals/formals.component';
import { CasualsComponent } from './casuals/casuals.component';
import { JeansComponent } from './jeans/jeans.component';
import { PantsComponent } from './pants/pants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { TraDetailsComponent } from './tra-details/tra-details.component';
import {ProductListService } from './services/product-list.service';
import { AngularFireModule } from '@angular/fire';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TraditionalComponent,
    FormalsComponent,
    CasualsComponent,
    JeansComponent,
    PantsComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    TraDetailsComponent,
    LoginComponent,
    AuthComponent,
    CartComponent,
    OrderComponent,
    AdminComponent,
    AdmindetailsComponent
  ],
  imports: [
    
    AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, 
  AngularFirestoreModule,
  FormsModule,                               
  HttpClientModule,
  ReactiveFormsModule,
    NgsRevealModule,
    AnimateOnScrollModule.forRoot(),
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'traditional', component: TraditionalComponent },
      { path: 'formals', component: FormalsComponent },
      { path: 'casuals', component: CasualsComponent },
      { path: 'jeans', component: JeansComponent },
      { path: 'pants', component: PantsComponent },
      { path: 'about', component: AboutComponent},
      {path: 'auth',component: AuthComponent},
      {path: 'cart' , component:CartComponent},
      {path: 'order', component:OrderComponent},
      {path: 'admin' , component:AdminComponent},
      {path: 'admindetails' , component:AdmindetailsComponent }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule {

  myFunction() {
    var x = document.getElementById("navDemo");
   if (x.className.indexOf("w3-show") == -1) {
     x.className += " w3-show";
   } else {
     x.className = x.className.replace(" w3-show", "");
   }
  }

  

}


