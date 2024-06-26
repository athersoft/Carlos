import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPagePageRoutingModule } from './account-page-routing.module';

import { AccountPagePage } from './account-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AccountPagePage]
})
export class AccountPagePageModule {}
