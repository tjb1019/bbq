import { Injectable } from '@angular/core';

import { ROUTES } from '../utilities/constants';
import { Route } from '../models/route';

@Injectable()
export class RouteManagementService {

  activeRoute: Route;

  constructor() {
    switch (window.location.pathname) {
      case ('/menu'):
        this.activeRoute = ROUTES[0];
        break;
      case ('/contact'):
        this.activeRoute = ROUTES[1];
        break;
      case ('/about'):
        this.activeRoute = ROUTES[2];
        break;
      case ('/photos'):
        this.activeRoute = ROUTES[3];
        break;
    }
  }

  activateRoute(route: Route): void {
    this.activeRoute = route;
  }

}
