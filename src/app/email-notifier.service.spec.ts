import { TestBed } from '@angular/core/testing';

import { EmailNotifierService } from './email-notifier.service';

describe('EmailNotifierService', () => {
  let service: EmailNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
