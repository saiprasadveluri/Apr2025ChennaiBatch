import { TestBed } from '@angular/core/testing';

import { VisitorServicesComponent } from './visitor.service';

describe('VisitorService', () => {
  let service: VisitorServicesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorServicesComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
