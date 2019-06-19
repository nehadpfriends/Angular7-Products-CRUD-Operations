import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Subject } from "rxjs/Subject";

export class ProductService {
  //  @Injectable()
  productsChanged = new Subject<Product[]>();

   private products: Product[] = [
        new Product('Mobile', 7654346578, '6gb Ram, 128gb Hard Disk, 28px back camera, 5px front camera', 16999),
        new Product('Clothes', 7654346570, 'Mens & Womens Accessories', 1000),
        new Product('Bags', 7654346579, '3 compartment, laptop compartment', 50000)                
    ];

    getProductList() {
        return this.products.slice();
    }

    getProductById(id: number) {
        return this.products[id];
    }

    updateProduct(index: number, updatedProduct: Product) {
        this.products[index] = updatedProduct;
        this.productsChanged.next(this.products.slice());
    }

    deleteProduct(index: number) {
        this.products.splice(index, 1);
        this.productsChanged.next(this.products.slice());         
    }

    addNewProduct(newProduct: Product) {
        this.products.push(newProduct);
        this.productsChanged.next(this.products.slice());         
    }
}