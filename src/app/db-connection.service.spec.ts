import { TestBed } from '@angular/core/testing';

import { DbConnectionService } from './db-connection.service';

describe('DbConnectionService', () => {
  let service: DbConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
