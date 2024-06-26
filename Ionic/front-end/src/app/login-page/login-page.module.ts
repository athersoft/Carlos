import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPagePageRoutingModule } from './login-page-routing.module';

import { LoginPagePage } from './login-page.page';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [LoginPagePage]
})
export class LoginPagePageModule {}
