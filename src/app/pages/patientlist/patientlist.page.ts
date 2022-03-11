import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.page.html',
  styleUrls: ['./patientlist.page.scss'],
})
export class PatientlistPage implements OnInit {

  private patients: any = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/patients').subscribe(data => {
      console.log(data);
      if(data){
        this.patients = data
      }
    }, err => {
      console.log(err)
    })
  }

  navigateToPatientInfo() {
    this.router.navigate(['home/patientinfo']);
  }
}
