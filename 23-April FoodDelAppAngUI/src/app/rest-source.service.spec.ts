import { TestBed } from '@angular/core/testing';

import { RestSourceService } from './rest-source.service';

describe('RestSourceService', () => {
  let service: RestSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
