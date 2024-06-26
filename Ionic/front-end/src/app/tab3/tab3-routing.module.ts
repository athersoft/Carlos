import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'title-page',
    loadChildren: () => import('../title-page/title-page.module').then( m => m.TitlePagePageModule)
  },
  {
    path: 'account-page',
    loadChildren: () => import('../account-page/account-page.module').then( m => m.AccountPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
