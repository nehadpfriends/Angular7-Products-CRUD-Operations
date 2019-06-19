import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 id: number;
 product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.product = this.productService.getProductById(this.id);
      }
    );
  }

  deleteProduct() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.name = this.product.name;
    modalRef.componentInstance.index = this.id;

  }

}
