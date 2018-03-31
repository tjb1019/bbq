import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouteManagementService } from '../../services/route-management.service';

@Component({
  selector: 'bbq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public navState: RouteManagementService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
