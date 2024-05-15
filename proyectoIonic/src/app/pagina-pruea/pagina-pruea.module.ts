import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrueaPageRoutingModule } from './pagina-pruea-routing.module';

import { PaginaPrueaPage } from './pagina-pruea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrueaPageRoutingModule
  ],
  declarations: [PaginaPrueaPage]
})
export class PaginaPrueaPageModule {}
