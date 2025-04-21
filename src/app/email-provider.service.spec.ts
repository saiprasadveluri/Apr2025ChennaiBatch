import { TestBed } from '@angular/core/testing';

import { EmailProviderService } from './email-provider.service';

describe('EmailProviderService', () => {
  let service: EmailProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
