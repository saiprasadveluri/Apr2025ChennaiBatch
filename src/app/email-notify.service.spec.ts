import { TestBed } from '@angular/core/testing';

import { EmailNotifyService } from './email-notify.service';

describe('EmailNotifyService', () => {
  let service: EmailNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
