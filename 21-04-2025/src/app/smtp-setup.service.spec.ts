import { TestBed } from '@angular/core/testing';

import { SmtpSetupService } from './smtp-setup.service';

describe('SmtpSetupService', () => {
  let service: SmtpSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmtpSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
