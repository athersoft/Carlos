import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPagePage } from './signup-page.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPagePage
  }
  /*
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  }
  Por algún motivo, si dejamos esto acá, la página tarda minutos en cargar
  pero igual funciona... igual es porque las rutas son de ida y vuelta?????
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPagePageRoutingModule {}
