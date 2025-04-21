import { TestBed } from '@angular/core/testing';

import { SmsNotifierService } from './sms-notifier.service';

describe('SmsNotifierService', () => {
  let service: SmsNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
