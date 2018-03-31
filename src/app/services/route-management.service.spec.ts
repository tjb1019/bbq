import { TestBed, inject } from '@angular/core/testing';

import { RouteManagementService } from './route-management.service';

describe('RouteManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteManagementService]
    });
  });

  it('should be created', inject([RouteManagementService], (service: RouteManagementService) => {
    expect(service).toBeTruthy();
  }));
});
