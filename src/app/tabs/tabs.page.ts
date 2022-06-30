import { Component } from '@angular/core';
import { CarrinhoService } from 'src/service/carrinho.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private carrinhoSrc: CarrinhoService
  ) {}

}
