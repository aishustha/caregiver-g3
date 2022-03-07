import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewpatient',
  templateUrl: './addnewpatient.page.html',
  styleUrls: ['./addnewpatient.page.scss'],
})
export class AddnewpatientPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addnewpatient() {
    this.router.navigate(['home/patientinfo']);
  }
}
