import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPagePage } from './alert-page.page';

const routes: Routes = [
  {
    path: '',
    component: AlertPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPagePageRoutingModule {}
