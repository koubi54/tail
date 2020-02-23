import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.page.html',
  styleUrls: ['./clinic.page.scss'],
})
export class ClinicPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  go() {
    this.router.navigateByUrl('/book');
  }
}
