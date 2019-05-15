import { Injectable } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[]
  constructor() {
    this.products = [
      { id: 1, name: 'cat', price: 200, discount: 50 },
      { id: 2, name: 'ca2', price: 300 },
      { id: 3, name: 'ca3', price: 400, discount: 50 },
      { id: 4, name: 'ca4', price: 500, discount: 100, photo: "https://babeltechreviews.com/wp-content/uploads/2018/07/rendition1.img_.jpg" },
      { id: 5, name: 'ca5', price: 100, photo: "https://cdn.shopify.com/s/files/1/1396/1889/products/palm_treo_pro_1_600x.jpg?v=1476326001" }
    ]
  }
  getAll() {
    return this.products;
  }
}
