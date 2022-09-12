import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  constructor( ) { }

  public getDados() {

    // let url = "https://api.github.com/users/Katielly";
    let url = "http://192.168.2.104:8080/cardapio";
    let http = new XMLHttpRequest();
    http.open("GET", url, false);
    http.send();
    let dados = JSON.parse(http.responseText);
    console.log('dados:', dados);
    return dados;
  }
}
