import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-addpatientinfo',
  templateUrl: './addpatientinfo.page.html',
  styleUrls: ['./addpatientinfo.page.scss'],
})
export class AddpatientinfoPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  addpatientinfo() {
    this.router.navigate(['home/patientrecord'])
  }
}
