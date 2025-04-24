import { TestBed } from '@angular/core/testing';

import { SmsnotificationService } from './smsnotification.service';

describe('SmsnotificationService', () => {
  let service: SmsnotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsnotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
