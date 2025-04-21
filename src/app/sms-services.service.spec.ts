import { TestBed } from '@angular/core/testing';

import { SmsServicesService } from './sms-services.service';

describe('SmsServicesService', () => {
  let service: SmsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
