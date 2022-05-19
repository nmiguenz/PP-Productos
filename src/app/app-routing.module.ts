import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./paginas/bienvenida/bienvenida.module').then(
        (m) => m.BienvenidaModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./paginas/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'alta',
    loadChildren: () =>
      import('./paginas/alta-producto/alta-producto.module').then(
        (m) => m.AltaProductoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
