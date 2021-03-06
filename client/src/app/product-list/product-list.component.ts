import { products } from '../products';
import { Component, OnInit } from '@angular/core';
import { HmacSHA256, SHA256 } from 'crypto-js';
import { toBase64String } from '@angular/compiler/src/output/source_map';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {
    let message ="mess";
    const hashDiget = (HmacSHA256('/test/apibar2foo1foo_bar3foobar4','4r').toString());
    console.log('diget', hashDiget);
  }

  ngOnInit(): void {
  }

  share(){
    alert('product has been saved');
  }

  onNotify(){
    alert('you will be notified when the product gors on sale');
  }

  changeNameList(newName: string){
    console.log("change name runned")
    this.products[0].name = newName;
  }
}
