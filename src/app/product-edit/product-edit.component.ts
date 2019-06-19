import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'server/src/model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
id: number;
editMode = false;
productForm: FormGroup;
  constructor(private route: ActivatedRoute, 
            private productService: ProductService,
            private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let productName = '';
    let productCost = 0;
    let productDescription = '';
    let productMobile;

    if (this.editMode) {
     let product = this.productService.getProductById(this.id);
     productName = product.name;
     productCost = product.cost;
     productDescription = product.description;
     productMobile = product.phone;
    }
    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'phone': new FormControl(productMobile, Validators.required),
      'description': new FormControl(productDescription),
      'cost': new FormControl(productCost, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addNewProduct(this.productForm.value);
    }
    this.onCancel();
  }
  

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
