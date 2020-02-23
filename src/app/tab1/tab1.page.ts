import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'swiper-pagination-testimonials-'
    }
  }
  constructor(private router: Router) {}
  go() {
    this.router.navigateByUrl('/tabs/clinic');
  }
}
