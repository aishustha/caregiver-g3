import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {}

  navigateToLoginPage() {
    this.router.navigate(['login']);
  }
}

