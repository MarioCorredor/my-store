import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() {
      return this.http.get<Product[]>('/assets/products.json');
      }
    
  }