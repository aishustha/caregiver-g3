import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.page.html',
  styleUrls: ['./patientlist.page.scss'],
})
export class PatientlistPage implements OnInit {

  patients: any = [];
  searchTerm: string;
  
  constructor(private router: Router, private http: HttpClient) {}
  private alertController: AlertController

  ngOnInit() {}

  async presentDeletionAlert() {
    const alert = await this.alertController.create({
      header: 'User Deleted Successfully',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ionViewWillEnter() {
    const URL = 'https://patient-mgmt-rest.herokuapp.com/patient';
    const requestOptions = {
      method: 'GET',
    };

    fetch(URL, requestOptions)
      .then(response => response.json()) // must convert the response to json
      .then(result => {
        // handle success
        this.patients = result;
        console.log('Successful', result);
        this.presentDeletionAlert();
      })
      .catch(err => {
        // handle error
        console.error('Something went wrong', err);
      });
  }

  navigateToPatientInfo(pId) {
    console.log(pId);
    this.router.navigate([`home/patientinfo/${pId}`]);
  }

  deletePatient(pId) {
    const URL = `https://patient-mgmt-rest.herokuapp.com/patient/${pId}`;
    const requestOptions = {
      method: 'DELETE',
    };

    fetch(URL, requestOptions)
      .then(response => response.json()) // must convert the response to json
      .then(result => {
        console.log('Successful', result);
      })
      .catch(err => {
        console.error('Something went wrong', err);
      });


  }
}
