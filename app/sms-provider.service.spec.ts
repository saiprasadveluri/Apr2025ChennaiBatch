import { TestBed } from '@angular/core/testing';

import { SmsProviderService } from './sms-provider.service';

describe('SmsProviderService', () => {
  let service: SmsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
