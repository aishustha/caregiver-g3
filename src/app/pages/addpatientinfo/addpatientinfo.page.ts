import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addpatientinfo',
  templateUrl: './addpatientinfo.page.html',
  styleUrls: ['./addpatientinfo.page.scss'],
})
export class AddpatientinfoPage implements OnInit {
  constructor(public alertController: AlertController) {}

  name = '';
  weight = '';
  height = '';
  group = '';
  pressure = '';
  respiratory = '';
  oxygen = '';
  heartbeat = '';
  condition1 = '';
  condition2 = '';
  condition3 = '';

  ngOnInit() {}

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'User Information Added Successfully',
      buttons: ['OK'],
    });

    await alert.present();
  }

  addpatientinfo() {
    const URL = `https://patient-mgmt-rest.herokuapp.com/patient/${21}/test`;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: this.name,
      weight: this.weight,
      height: this.height,
      group: this.group,
      pressure: this.pressure,
      respiratory: this.respiratory,
      oxygen: this.oxygen,
      heartbeat: this.heartbeat,
      condition1: this.condition1,
      condition2: this.condition2,
      condition3: this.condition3,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(URL, requestOptions)
      .then(response => response.text())
      .then(result => {
        this.presentSuccessAlert();
        console.log(result);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
}
