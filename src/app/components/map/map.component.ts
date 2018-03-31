import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbq-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 39.855811;
  long = -75.857854;
  
  constructor() { }

  ngOnInit() {
  }

}
