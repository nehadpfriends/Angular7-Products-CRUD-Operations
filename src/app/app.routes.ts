import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const appRoutes: Routes = [
   { path: '', redirectTo: '/products', pathMatch: 'full' },
   { path: 'products', component: ProductsComponent, children: [
    { path: 'new', component: ProductEditComponent },       
    { path: ':id', component: ProductDetailsComponent },
     { path: ':id/edit', component: ProductEditComponent },


    ] 
}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoute {
}