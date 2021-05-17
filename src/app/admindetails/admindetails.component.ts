import { post1 } from './post.model';
import { PortalHostDirective } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ProductListService } from '../services/product-list.service';
import { map } from 'rxjs/operators';
// import { post1 } from './admindetails.component' 

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  loadedPosts: post1[] = [];
  constructor(private router:Router , private service: ProductListService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchpost();
  }


private fetchpost(){

  this.http.get("https://triplemkec-default-rtdb.firebaseio.com/set.json")
  .pipe(map((responseData:{ [key :string] :post1})=> {
    const postsArray : post1[]=[];
    for (const key in responseData){
      postsArray.push({...responseData[key], id:key })
    }

    return postsArray;
  }))

  .subscribe(
    posts=>{

        console.log(posts[0].phoneno);
        this.loadedPosts=posts;

    }
  );
}

}
