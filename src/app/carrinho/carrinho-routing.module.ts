import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoPage } from './carrinho.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoPageRoutingModule {}
