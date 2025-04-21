import { TestBed } from '@angular/core/testing';

import { RemoteAccessService } from './remote-access.service';

describe('RemoteAccessService', () => {
  let service: RemoteAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
