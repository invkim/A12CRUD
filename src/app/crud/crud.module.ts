import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    CreateProductComponent,
    ProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule
  ]
})
export class CRUDModule { }
