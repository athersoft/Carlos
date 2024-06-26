import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPagePage } from './login-page.page';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RecaptchaModule, RecaptchaFormsModule],
  exports: [RouterModule, RecaptchaModule, RecaptchaFormsModule],
})
export class LoginPagePageRoutingModule {}
