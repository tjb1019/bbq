import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../../utilities/constants';
import { Route } from '../../models/route';

import { RouteManagementService } from '../../services/route-management.service';

@Component({
  selector: 'bbq-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  scrolling: boolean;
  routes: Route[];
  
  constructor(
    private navState: RouteManagementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routes = ROUTES;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 140) {
        this.scrolling = true;
      } else {
        this.scrolling = false;
      }
    });
  }

}
