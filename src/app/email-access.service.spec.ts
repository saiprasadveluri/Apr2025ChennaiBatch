import { TestBed } from '@angular/core/testing';

import { EmailAccessService } from './email-access.service';

describe('EmailAccessService', () => {
  let service: EmailAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
