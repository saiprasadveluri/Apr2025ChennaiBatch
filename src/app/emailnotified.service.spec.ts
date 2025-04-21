import { TestBed } from '@angular/core/testing';

import { EmailnotifiedService } from './emailnotified.service';

describe('EmailnotifiedService', () => {
  let service: EmailnotifiedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailnotifiedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
