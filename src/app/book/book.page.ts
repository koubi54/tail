import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  slideOptsOne = {
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'swiper-pagination-position-'
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  go() {
    this.router.navigateByUrl('/tabs/tab1');
  }
}
