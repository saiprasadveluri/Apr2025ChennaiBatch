import { TestBed } from '@angular/core/testing';

import { SMTPSetupService } from './smtpsetup.service';

describe('SMTPSetupService', () => {
  let service: SMTPSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMTPSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
