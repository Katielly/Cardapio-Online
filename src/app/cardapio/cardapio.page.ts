import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { dados } from '../../components/dados';
import { CarrinhoService } from '../../service/carrinho.service';
import { ToastService } from '../../service/toast.service';
import { EventoService } from 'src/service/evento.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: 'cardapio.page.html',
  styleUrls: ['cardapio.page.scss']
})
export class CardapioPage implements OnInit {


  DadoLoja = dados;
  produtosCategoria = this.DadoLoja.categorias[0].produtos;

  constructor(
    private carrinhoSrc: CarrinhoService,
    private toastSrc: ToastService,
    private evento: EventoService
  ) {
    this.evento.addCallback('exibirCardapio', () => this.ngOnInit());
  }

  ngOnInit(): void {}

  selectCat(categoriaSelect) {
    this.produtosCategoria = categoriaSelect.produtos;
  }

  checarCarrinho(produto) {
    console.log(produto);

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

    // this.toastSrc.toast(produto.nome + ' selecionado!');
  }
}
