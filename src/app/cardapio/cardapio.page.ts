import { Component, Inject, OnInit } from '@angular/core';
import { dados } from '../../components/dados';
import { CarrinhoService } from '../../service/carrinho.service';
import { EventoService } from 'src/service/evento.service';
import { DOCUMENT } from '@angular/common';
import { ClientHttpService } from 'src/service/client-http.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: 'cardapio.page.html',
  styleUrls: ['cardapio.page.scss']
})
export class CardapioPage implements OnInit {

  // dadoLoja = this.httpSrc.getDados();
  dadoLoja = dados;
  // produtosCategoria = this.dadoLoja[0].categorias[0].produtos;
  produtosCategoria = dados.categorias[0].produtos;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private carrinhoSrc: CarrinhoService,
    private evento: EventoService,
    private httpSrc: ClientHttpService
    ) {
    this.evento.addCallback('exibirCardapio', () => this.ngOnInit());
  }
  
  ngOnInit() {
  }
  
  selectCat(categoriaSelect) {
    this.dadoLoja.categorias.find(cat => this.produtosCategoria = cat.nome === categoriaSelect ? cat.produtos : null);
    this.animateScrollCat(categoriaSelect);
  }

  checarCarrinho(produto) {
    let temCarrinho = this.carrinhoSrc.carrinho.find(item => item.nome === produto.nome);
    if (temCarrinho) {
      temCarrinho.qtd++;
      return true;
    } else {
      return false;
    }
  }

  selecionarProd(produto) {
    let temCarrinho = this.checarCarrinho(produto);

    if (!temCarrinho) {

      let produtoVaiCarrinho = {
        nome: produto.nome,
        img: produto.img,
        descricao: produto.descricao,
        preco: produto.preco,
        qtd: 1
      }

      this.carrinhoSrc.add(produtoVaiCarrinho);
    }
  }

  animateScrollCat(segment: string) {
    if (!segment) { return; }
    setTimeout(() => {
      try {
        this.document.querySelector(`ion-segment-button[data-ref="${segment}"]`).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      } catch (error) {
        //nothing
      }
    }, 125);
  }

}
