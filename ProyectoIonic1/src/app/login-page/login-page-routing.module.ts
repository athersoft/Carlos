import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPagePage } from './login-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
  /*,
  {
    path: 'signup-page',
    loadChildren: () => import('../signup-page/signup-page.module').then( m => m.SignupPagePageModule)
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPagePageRoutingModule {}
