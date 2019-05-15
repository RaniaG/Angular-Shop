import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private products: Product[]
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  ngOnInit() {
  }

}
