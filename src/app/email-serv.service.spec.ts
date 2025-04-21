import { TestBed } from '@angular/core/testing';

import { EmailServService } from './email-serv.service';

describe('EmailServService', () => {
  let service: EmailServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
