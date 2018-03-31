import { Injectable } from '@angular/core';

import { Route } from '../models/route';

@Injectable()
export class RouteManagementService {

  activeRoute: Route;
  
  constructor() { }

  activateRoute(route: Route): void {
    this.activeRoute = route;
  }

}
