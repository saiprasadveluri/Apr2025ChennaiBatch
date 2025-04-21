import { TestBed } from '@angular/core/testing';

import { RemoteAccesssService } from './remote-accesss.service';

describe('RemoteAccesssService', () => {
  let service: RemoteAccesssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteAccesssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
