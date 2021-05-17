import { Injectable, Component } from '@angular/core';
import { MapOperator } from 'rxjs/internal/operators/map';
// import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  p=[];
  main=[];
  mymap:Map<string,object>
  private subject = new Subject<any>();
  // mymap1:Map<string,object>;
  // id :any;
  
  
  constructor() {
   }

  
  addItem(id:string){

    // this.mymap =new Map();

    //verify the map in the mymap
    // this.mymap1=new Map();
    console.log("id-"+id);
    this.p.push(id);
    
    
    console.log("pushed");
    

    // this.subject.next({ data: this.mymap });
  }

  getservices(product:string){

     this.mymap =new Map();

    
    this.mymap.set("101",{
      id: 1,
      name: 'Mens Set',
      price: '699 - 999',
      url:'/assets/img/101set.jpeg',
    });
    this.mymap.set("102",{
      id: 2,
      name: 'Mens Set',
      price: '699 - 999',
      url:'/assets/img/109set.jpeg'
    });
    this.mymap.set("103",{
      id: 3,
      name: 'Mens Set',
      price: '699 - 999',
      url:'/assets/img/113set.jpeg'
    });
    this.mymap.set("104",{
      id: 4,
      name: 'Mens Shirt',
      price: '399 - 559',
      url:'/assets/img/109.jpeg'
    });
    this.mymap.set("105",{
      id: 5,
      name: 'Mens Shirt',
      price: '399 - 559',
      url:'/assets/img/107.jpeg'
    });
    this.mymap.set("106",{
      id: 6,
      name: 'Mens Shirt',
      price: '399 - 559',
      url:'/assets/img/106.jpeg'
    });

    this.mymap.set("107",{
      id: 7,
      name: 'Mens Velcro',
      price: '349',
      url:'/assets/img/velcore2.jpg',
    });
    this.mymap.set("108",{
      id: 8,
      name: 'Mens Velcro',
      price: '349',
      url:'/assets/img/velcore1.jpg',
    });
    this.mymap.set("111",{
      id: 11,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b1.jpeg',
    });
    this.mymap.set("112",{
      id: 12,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b3.jpeg',
    });
    this.mymap.set("113",{
      id: 13,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b5.jpeg',
    });
    this.mymap.set("114",{
      id: 14,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b7.jpeg',
    });
    this.mymap.set("115",{
      id: 15,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b2.jpeg',
    });
    this.mymap.set("116",{
      id: 16,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b4.jpeg',
    });
    this.mymap.set("117",{
      id: 17,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b6.jpeg',
    });
    this.mymap.set("118",{
      id: 18,
      name: 'Kid\'s Set',
      price: '599-759',
      url:'/assets/img/b8.jpeg',
    });

    // jeans module

    this.mymap.set("121",{
      id: 21,
      name: 'Batablue',
      price: '799 - 959',
      url:'/assets/img/Batablue1.jpg',
    });
    this.mymap.set("122",{
      id: 22,
      name: 'Coffee',
      price: '799-959',
      url:'/assets/img/coffee2.jpg',
    });
    this.mymap.set("123",{
      id: 23,
      name: 'Denim Blue',
      price: '799-959',
      url:'/assets/img/Denim_blue1.jpg',
    });
    this.mymap.set("124",{
      id: 24,
      name: 'Killer Blue',
      price: '799-959',
      url:'/assets/img/Killer_blue1.jpg"',
    });
    this.mymap.set("125",{
      id: 25,
      name: 'Z Black',
      price: '799-959',
      url:'/assets/img/zblack1.jpg',
    });
    this.mymap.set("126",{
      id: 26,
      name: 'Z Green',
      price: '799-959',
      url:'/assets/img/zgreen3.jpg',
    });
    this.mymap.set("127",{
      id: 27,
      name: 'Bata Blue',
      price: '799-959',
      url:'/assets/img/Batablue1.jpg',
    });
    this.mymap.set("128",{
      id: 28,
      name: 'Killer Blue',
      price: '799-959',
      url:'/assets/img/Killer_blue1.jpg',
    });

    this.mymap.set("131",{
      id: 31,
      name: 'Bisket',
      price: '699 - 859',
      url:'/assets/img/bisket.jpg',
    });
    this.mymap.set("132",{
      id: 32,
      name: 'Brown',
      price: '699-859',
      url:'/assets/img/brown.jpg',
    });
    this.mymap.set("133",{
      id: 33,
      name: 'Chocolate',
      price: '699-859',
      url:'/assets/img/chocolate.jpg',
    });
    this.mymap.set("134",{
      id: 34,
      name: 'Dark grey',
      price: '699-859',
      url:'/assets/img/Dgrey.jpg',
    });
    this.mymap.set("135",{
      id: 35,
      name: 'L Black',
      price: '699-859',
      url:'/assets/img/lblack.jpg',
    });
    this.mymap.set("136",{
      id: 36,
      name: 'Z Black',
      price: '699-859',
      url:'/assets/img/z_black.jpg',
    });
    this.mymap.set("137",{
      id: 37,
      name: 'Light Grey',
      price: '699-859',
      url:'/assets/img/lgrey.jpg',
    });
    this.mymap.set("138",{
      id: 38,
      name: 'Maroon',
      price: '699-859',
      url:'/assets/img/chocolate.jpg',
    });

    // casual Component

    this.mymap.set("141",{
      id: 41,
      name: 'Model No : 110',
      price: '759-959',
      url:'/assets/img/c1.jpg',
    });
    this.mymap.set("142",{
      id: 42,
      name: 'Model No : 120',
      price: '759-959',
      url:'/assets/img/c2.jpg',
    });
    this.mymap.set("143",{
      id: 43,
      name: 'Model No : 130',
      price: '759-959',
      url:'/assets/img/c3.jpg',
    });
    this.mymap.set("144",{
      id: 44,
      name: 'Model No : 140',
      price: '759-959',
      url:'/assets/img/c4.jpg',
    });
    this.mymap.set("145",{
      id: 45,
      name: 'Model No : 150',
      price: '759-959',
      url:'/assets/img/c5.jpg',
    });
    this.mymap.set("146",{
      id: 46,
      name: 'Model No : 160',
      price: '759-959',
      url:'/assets/img/c6.jpg',
    });
    this.mymap.set("147",{
      id: 47,
      name: 'Model No : 170',
      price: '759-959',
      url:'/assets/img/c7.jpg',
    });
    this.mymap.set("148",{
      id: 48,
      name: 'Model No : 180',
      price: '759-959',
      url:'/assets/img/c8.jpg',
    });



  console.log("product id " + product);
    console.log("map "+ JSON.stringify(this.mymap.get(product)));
  return this.mymap.get(product);
  }


  ondisplay()
  {
    console.log("Inside 2nd");
    console.log(this.p);
    // for (var id of this.p){
    //   this.main.push(this.mymap.get(id));
    // }
    for (var i in this.p){
      console.log("p array--->"+this.main[i].name);
  }
  console.log("main->>>"+this.main)
  }

  arrayReturn()
  {
    while(this.main.length > 0) {
      this.main.pop();
    }
    for (var id of this.p){
        this.main.push(this.mymap.get(id));
      }
    return this.main;
  }

  returnId()
  {
    return this.p;
  }

}
