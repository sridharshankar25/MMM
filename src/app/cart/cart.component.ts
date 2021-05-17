import { ProductListService } from './../services/product-list.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subscription} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // ProductListService: any;
  // id: any;

  // public books: FirebaseistObservable<Book[]>;
  //  list = new Map();
  list :string[];
 
  constructor(private firestore: AngularFirestore , private http: HttpClient , private service: ProductListService) {
    this.list=service.arrayReturn();
    console.log(this.list);
  }

  
      
   

  ngOnInit(): void {
    
  }



  onclickcheck( id :string){
    const postData = id;

    this.http.post("https://triplemkec-default-rtdb.firebaseio.com/courses.json",postData)
    .subscribe(responseData => {
      console.log(responseData);
    });

  }

  onfetch(){
    this.fetchdata();
  }

  private fetchdata(  ){
    this.http.get("https://triplemkec-default-rtdb.firebaseio.com/courses.json")
    .pipe(map(responseData => {
        const postsArray=[];

        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key] , id :key});
          }
        }
        return postsArray;
    }))
    .subscribe(posts => {
      console.log(posts)
    });
  }

  ondisplay(){
    console.log("Inside 1st ondisplay");
    this.service.ondisplay();
  }

}

