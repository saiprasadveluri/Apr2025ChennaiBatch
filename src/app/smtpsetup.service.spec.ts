import { TestBed } from '@angular/core/testing';

import { SmtpsetupService } from './smtpsetup.service';

describe('SmtpsetupService', () => {
  let service: SmtpsetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmtpsetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
