import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaProductoRoutingModule } from './alta-producto-routing.module';
import { AltaProductoComponent } from './alta-producto.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaProductoComponent
  ],
  imports: [
    CommonModule,
    AltaProductoRoutingModule,
    // ReactiveFormsModule,
    // FormsModule,
  ]
})
export class AltaProductoModule { }
