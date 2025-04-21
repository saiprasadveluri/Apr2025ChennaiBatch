import { TestBed } from '@angular/core/testing';

import { SMSNotificationService } from './smsnotification.service';

describe('SMSNotificationService', () => {
  let service: SMSNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMSNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
