import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  deleteProduct(index: number) {
   this.productService.deleteProduct(index);
   this.activeModal.close('deleted');
   this.router.navigate(['/products']);
  }

}
