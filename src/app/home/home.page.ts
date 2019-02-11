import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public toastController: ToastController){
		// calling toast function
		this.presentToast();
	}

	// toast must use async and await in ionic.
	async presentToast() {
	    const toast = await this.toastController.create({
	      message: 'Enter Valid Details...',
	      duration: 2000,
	      position: 'top'
	    });
	    toast.present();
	}

}
