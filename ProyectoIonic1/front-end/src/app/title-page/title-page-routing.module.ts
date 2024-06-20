import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitlePagePage } from './title-page.page';

const routes: Routes = [
  {
    path: '',
    component: TitlePagePage
  },
  {
    path: 'login-page',
    loadChildren: () => import('../login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'signup-page',
    loadChildren: () => import('../signup-page/signup-page.module').then( m => m.SignupPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitlePagePageRoutingModule {}
