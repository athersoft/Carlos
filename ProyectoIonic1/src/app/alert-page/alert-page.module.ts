import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPagePageRoutingModule } from './alert-page-routing.module';

import { AlertPagePage } from './alert-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPagePageRoutingModule
  ],
  declarations: [AlertPagePage]
})
export class AlertPagePageModule {}
