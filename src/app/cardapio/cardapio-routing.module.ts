import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioPage } from './cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardapioPageRoutingModule {}
