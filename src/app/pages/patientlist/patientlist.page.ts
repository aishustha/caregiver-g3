import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.page.html',
  styleUrls: ['./patientlist.page.scss'],
})
export class PatientlistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPatientInfo() {
    this.router.navigate(['home/patientinfo']);
  }
}
