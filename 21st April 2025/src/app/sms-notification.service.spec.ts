import { TestBed } from '@angular/core/testing';

import { SmsNotificationService } from './sms-notification.service';

describe('SmsNotificationService', () => {
  let service: SmsNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
