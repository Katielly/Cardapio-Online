import { Component, OnChanges, OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ToastService } from 'src/service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss']
})
export class CarrinhoPage implements OnInit {

  prodCarrinho: any[] = this.carrinhoSrc.carrinho;
  total: number;

  constructor(
    private toastSrc: ToastService,
    private carrinhoSrc: CarrinhoService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.calculateTotal();
  }
  
  get carrinho(): any[]{ 
    return this.carrinhoSrc.carrinho;
  } 
  
  sendRequest() {
    if (this.carrinhoSrc.carrinho.length !== 0 && this.carrinho.length !== 0) {
      this.prodCarrinho = []; 
      this.carrinhoSrc.carrinho = [];
      this.calculateTotal();
      this.toastSrc.toast('Pedido enviado com Sucesso!!');
      setTimeout(() => this.router.navigate(['tabs/cardapio']), 1000);
      return;

    } else if (this.carrinhoSrc.carrinho.length === 0 && this.carrinho.length === 0) {
      this.toastSrc.toast('Carrinho Vazio!');
      return setTimeout(() => this.router.navigate(['tabs/cardapio']), 1000);
    }
  }

  remove(produto) {
    let produtoCarrinho = this.carrinhoSrc.carrinho.find(item => item.nome === produto.nome);
    if (produtoCarrinho.qtd > 1) {
      produtoCarrinho.qtd--;
      this.calculateTotal();
      return;
    }
    if (produtoCarrinho.qtd === 1) {
      this.toastSrc.confirm('Excluir Item', 'Deseja apagar item do carrinho.', () => {
        this.carrinhoSrc.carrinho.splice(this.carrinhoSrc.carrinho.indexOf(produtoCarrinho), 1);
        this.calculateTotal();
        if (this.carrinhoSrc.carrinho.length === 0) setTimeout(() => this.router.navigate(['tabs/cardapio']), 500);
      });
    }
  }

  add(produto) {
    let produtoCarrinho = this.carrinhoSrc.carrinho.find(item => item.nome === produto.nome);
    produtoCarrinho.qtd++;
    this.calculateTotal();
  }

  calculateTotal() {
    if(this.carrinho.length === 0) return this.total= 0;
    
    let totalItens = 0;
    this.total = !this.total ? 0 : this.total;
    this.carrinho.forEach(item => {
      let totalItem = (item.preco * item.qtd);    
      totalItens += totalItem;
    })
    this.total = totalItens;
    return this.total;
  }

}
