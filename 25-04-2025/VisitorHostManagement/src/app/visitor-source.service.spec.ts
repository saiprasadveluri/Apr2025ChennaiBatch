import { TestBed } from '@angular/core/testing';

import { VisitorSourceService } from './visitor-source.service';

describe('VisitorSourceService', () => {
  let service: VisitorSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
