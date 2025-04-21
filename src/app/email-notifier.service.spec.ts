import { TestBed } from '@angular/core/testing';

import { EMailNotifierService } from './email-notifier.service';

describe('EMailNotifierService', () => {
  let service: EMailNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMailNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
