import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  async toast(text: string, position : any = 'bottom'): Promise<void> {
    const toast = await this.toastController.create({message: text, position, duration: 2000});
    await toast.present();
  }

  async confirm(title: string, message: string, callback: any): Promise<void> {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: [
        {
          text: 'Não', role: 'Cancel', handler: () => {
            console.log('Confirm:Say:No');
          }
        },
        { text: 'Sim', handler: () => { callback(); } }
      ]
    });
    await alert.present();
  }
}
