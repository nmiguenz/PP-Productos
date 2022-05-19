import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AltaProductoComponent } from './alta-producto.component';

const routes: Routes = [
  { path: '', 
  component: AltaProductoComponent,
  // canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaProductoRoutingModule { }
