import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Product Details';
  field:string;
  prods:any;
  constructor(private prodser:ProductService) { }

  
  ngOnInit() {
    this.prodser.getProduct1().subscribe((data)=>this.prods=data);
  }
 

}
