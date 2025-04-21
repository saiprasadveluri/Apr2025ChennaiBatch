import { TestBed } from '@angular/core/testing';

import { SmsnotifiedService } from './smsnotified.service';

describe('SmsnotifiedService', () => {
  let service: SmsnotifiedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsnotifiedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
