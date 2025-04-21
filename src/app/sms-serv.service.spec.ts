import { TestBed } from '@angular/core/testing';

import { SmsServService } from './sms-serv.service';

describe('SmsServService', () => {
  let service: SmsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
