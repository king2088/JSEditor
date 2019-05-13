import { Injectable } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Injectable()

export class UtilsService {
    constructor(
        private toastCtl: ToastController,
        private modalCtl: ModalController
    ) {}

    async presentToast(message, position?) {
        const toast = await this.toastCtl.create({
            message,
            duration: 2000,
            cssClass: 'JSEditorToast',
            position: position ? position : 'bottom'
        });
        toast.present();
    }

    async halfModal(page, props?) {
        const modal = await this.modalCtl.create({
            component: page,
            cssClass: 'half-modal',
            componentProps: props ? props : {}
        });
        return await modal.present();
    }

    async dismissModal() {
        await this.modalCtl.dismiss();
    }
}
