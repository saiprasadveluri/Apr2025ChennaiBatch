import { TestBed } from '@angular/core/testing';

import { NotifyConnectionService } from './notify-connection.service';

describe('NotifyConnectionService', () => {
  let service: NotifyConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
