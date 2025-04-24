import { TestBed } from '@angular/core/testing';

import { OwnerSourceService } from './owner-source.service';

describe('OwnerSourceService', () => {
  let service: OwnerSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
