import { TestBed } from '@angular/core/testing';

import { SmsNotifyService } from './sms-notify.service';

describe('SmsNotifyService', () => {
  let service: SmsNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
