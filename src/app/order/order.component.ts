import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { post, map } from 'jquery';
import { ProductListService } from '../services/product-list.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  data:Map<string,object>
  list :string[];
  constructor(private router:Router , private service: ProductListService, private http: HttpClient ) { 
    this.list=service.returnId();
    console.log(this.list);
  }


  ngOnInit() {
 
  }

  OnSubmit(form:NgForm){
    console.log("inside onsubmit");
    this.data =new Map();
    let date: Date = new Date();
    
  if(!form.valid)
    {
      console.log("Invaild");
      return;
    }
    

    const name=form.value.cname;
    const shopname=form.value.sname;
    const phoneno=form.value.phoneno;
    const address=form.value.address;
    const orderdetails=form.value.order;
    this.data.set("name",name);
    this.data.set("shopname",shopname);
    this.data.set("phoneno",phoneno);
    this.data.set("address",address);
    this.data.set("orderdetails",orderdetails);


    console.log(this.data);
    let a = {name:String , shopname: String , phoneno : String , address : String , order: String , orders: this.list,date:date};
    a.name=name;
    a.shopname=shopname;
    a.phoneno=phoneno;
    a.order=orderdetails;
    a.address=address;
    a.orders=this.list;
    a.date=date;
    

    this.http.post("https://triplemkec-default-rtdb.firebaseio.com/set.json",a)
  .subscribe(responseData => {
    console.log(responseData);
  });
     
    window.alert("Thankyou for Ordering !!")

    this.router.navigate(['/about']);

  
 }



 onCreatePost(postData: { name :string , shopname: string , phoneno : string , address : string , order: string}){
  console.log("a=>"+postData);
  this.http.post("https://triplemkec-default-rtdb.firebaseio.com/co.json",postData)
  .subscribe(responseData => {
    console.log(responseData);
  });
       
      

 }

}
