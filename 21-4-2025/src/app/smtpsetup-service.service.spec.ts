import { TestBed } from '@angular/core/testing';

import { SMTPSetupServiceService } from './smtpsetup-service.service';

describe('SMTPSetupServiceService', () => {
  let service: SMTPSetupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMTPSetupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
