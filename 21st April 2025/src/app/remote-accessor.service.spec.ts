import { TestBed } from '@angular/core/testing';

import { RemoteAccessorService } from './remote-accessor.service';

describe('RemoteAccessorService', () => {
  let service: RemoteAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
