import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardapioPage } from './cardapio.page';
import { CardapioPageRoutingModule } from './cardapio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardapioPageRoutingModule,
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}
