import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrueaPage } from './pagina-pruea.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPrueaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPrueaPageRoutingModule {}
