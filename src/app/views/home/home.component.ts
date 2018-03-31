import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lat = 39.855811;
  long = -75.857854;
  
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
