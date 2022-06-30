import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho = [];

  constructor() { }

  public add(prod ){
    console.log('parametro da funcao do carrinhoService: ', prod);
    this.carrinho.push(prod);  
    console.log(this.carrinho);
  }
}
