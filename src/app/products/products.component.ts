import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[] = [];
subscription: Subscription;
  constructor(private productService: ProductService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.productService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
    this.products = this.productService.getProductList();
  }

  addProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
