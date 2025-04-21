import { TestBed } from '@angular/core/testing';

import { SmssetupService } from './smssetup.service';

describe('SmssetupService', () => {
  let service: SmssetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmssetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
