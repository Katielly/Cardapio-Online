import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cardapio',
        loadChildren: () => import('../cardapio/cardapio.module').then(m => m.CardapioPageModule)
      },
      {
        path: 'carrinho',
        loadChildren: () => import('../carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cardapio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cardapio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
