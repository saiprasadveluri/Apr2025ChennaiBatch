import { TestBed } from '@angular/core/testing';

import { SMTPServiceService } from './smtpservice.service';

describe('SMTPServiceService', () => {
  let service: SMTPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMTPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
