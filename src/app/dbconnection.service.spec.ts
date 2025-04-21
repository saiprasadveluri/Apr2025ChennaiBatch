import { TestBed } from '@angular/core/testing';

import { DBConnectionService } from './dbconnection.service';

describe('DBConnectionService', () => {
  let service: DBConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
