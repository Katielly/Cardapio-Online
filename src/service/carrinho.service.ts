import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho = [];

  constructor() { }

  public add(prod){
    this.carrinho.push(prod);  
  }
}
