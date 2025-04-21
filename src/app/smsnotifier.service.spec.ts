import { TestBed } from '@angular/core/testing';

import { SMSNotifierService } from './smsnotifier.service';

describe('SMSNotifierService', () => {
  let service: SMSNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMSNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
