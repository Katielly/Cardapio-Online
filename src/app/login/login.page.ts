import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  table: number;
  verificationCode: string;
  version: string = '1.0.0';
  
  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('tabs/cardapio');

  }
}
