import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ToastService } from 'src/service/toast.service';
import { EventoService } from 'src/service/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss']
})
export class CarrinhoPage implements OnInit {

  prodCarrinho = this.carrinhoSrc.carrinho;

  constructor(
    private toastSrc: ToastService,
    private carrinhoSrc: CarrinhoService,
    private evento: EventoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  enviarPedido() {
    if (this.carrinhoSrc.carrinho.length !== 0 && this.prodCarrinho.length !== 0) {
      this.toastSrc.toast('Pedido enviado com Sucesso!!');
      this.carrinhoSrc.carrinho = [];
      this.prodCarrinho = [];
      setTimeout(() => this.router.navigate(['tabs/cardapio']), 1500);
      return;

    } else if (this.carrinhoSrc.carrinho.length === 0 && this.prodCarrinho.length === 0) {
       this.toastSrc.toast('Carrinho Vazio!');
       return setTimeout(() => this.router.navigate(['tabs/cardapio']), 1000);
    }
  }

  remove(produto) {
    let produtoCarrinho = this.carrinhoSrc.carrinho.find(item => item.nome === produto.nome);

    if (produtoCarrinho.qtd > 1) {
      produtoCarrinho.qtd--;
      return;
    }
    if (produtoCarrinho.qtd === 1) {
      this.toastSrc.confirm('Excluir Item', 'Deseja apagar item do carrinho.', () => {
        this.carrinhoSrc.carrinho.splice(this.carrinhoSrc.carrinho.indexOf(produtoCarrinho), 1);
        console.log('carrinho: ', this.carrinhoSrc.carrinho);
        if (this.carrinhoSrc.carrinho.length === 0) setTimeout(() => this.router.navigate(['tabs/cardapio']), 500);
      });
    }

  }
}
