import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarrinhoPage } from './carrinho.page';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';
import { CardapioPage } from '../cardapio/cardapio.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CarrinhoPageRoutingModule
  ],
  declarations: [CarrinhoPage,CardapioPage]
})
export class CarrinhoPageModule {}
