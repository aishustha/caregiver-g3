import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.page.html',
  styleUrls: ['./patientinfo.page.scss'],
})
export class PatientinfoPage implements OnInit {
  constructor(private _activatedroute: ActivatedRoute) {}
  private patientId: String;
  private patientDetails: any = null;

  ngOnInit() {
    this.patientId = this._activatedroute.snapshot.paramMap.get('id');
    const URL = `https://patient-mgmt-rest.herokuapp.com/patient/${this.patientId}`;
    const requestOptions = {
      method: 'GET',
    };

    fetch(URL, requestOptions)
      .then(response => response.json()) // must convert the response to json
      .then(result => {
        // handle success
        this.patientDetails = result;
        console.log('Successful', result);
      })
      .catch(err => {
        // handle error
        console.error('Something went wrong', err);
      });
    console.log(this.patientDetails);
  }
}
