import { TestBed } from '@angular/core/testing';

import { SmsAccessService } from './sms-access.service';

describe('SmsAccessService', () => {
  let service: SmsAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
