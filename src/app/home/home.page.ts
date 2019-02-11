import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public toastController: ToastController, public alertController: AlertController, private router: Router, private route: ActivatedRoute,){
		// calling toast function
		this.presentToast();
	}

	goto() {
		this.router.navigate(['demo-page']);
	}

	async presentAlertConfirm() {
	    const alert = await this.alertController.create({
	      header: 'Alert Header!',
	      message: 'This is sample for <strong>ALert</strong> Box!!!',
	      buttons: [
	        {
	          text: 'Cancel',
	          role: 'cancel',
	          cssClass: 'secondary',
	          handler: () => {
	            console.log('Confirm Cancel');
	          }
	        }, {
	          text: 'Okay',
	          handler: () => {
	            console.log('Confirm Okay');
	          }
	        }
	      ]
	    });
	    await alert.present();
	}

	// toast must use async and await in ionic.
	async presentToast() {
	    const toast = await this.toastController.create({
	      message: 'Wecome...!',
	      duration: 2000,
	      position: 'top'
	    });
	    toast.present();
	}

}
