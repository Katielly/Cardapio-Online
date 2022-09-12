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

  prodCarrinho: any[] = this.carrinhoSrc.carrinho;
  total: number;
  carrinho = this.carrinhoSrc.carrinho;

  constructor(
    private toastSrc: ToastService,
    private carrinhoSrc: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTotal();
    this.refresh;
    console.log('carrinho do carrinho:', this.carrinho);
  }

  sendRequest() {
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
    console.log('carrinho do carrinho:', this.carrinho);

  }

  add(produto) {
    let produtoCarrinho = this.carrinhoSrc.carrinho.find(item => item.nome === produto.nome);
    produtoCarrinho.qtd++;
    console.log('produtoCarrinho: ', produtoCarrinho);
    console.log('carrinho do carrinho:', this.carrinho);

  }

  async refresh() {
    this.refreshTotal();
  }

  async loadData(){

  }

  refreshTotal() {
    let totalItem = 0;
    this.total = !this.total ? 0 : this.total;
    console.log('prodCarrinho: ', this.prodCarrinho);
    console.log('total: ', this.total);
    this.prodCarrinho.forEach(item => {
      totalItem = (item.preco * item.qtd);
      console.log('totalItem: ', totalItem);
      this.total += totalItem;
    })
    return this.total;
  }

}
