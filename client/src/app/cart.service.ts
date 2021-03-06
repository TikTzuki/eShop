import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product{
  id: number,
  name: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];

  constructor(private http: HttpClient) { }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}>('/assets/shippping.json');
  }

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
