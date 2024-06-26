import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'title-page',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'signup-page',
    loadChildren: () => import('./signup-page/signup-page.module').then( m => m.SignupPagePageModule)
  },
  {
    path: 'title-page',
    loadChildren: () => import('./title-page/title-page.module').then( m => m.TitlePagePageModule)
  },
  {
    path: 'alert-page',
    loadChildren: () => import('./alert-page/alert-page.module').then( m => m.AlertPagePageModule)
  },  {
    path: 'account-page',
    loadChildren: () => import('./account-page/account-page.module').then( m => m.AccountPagePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
