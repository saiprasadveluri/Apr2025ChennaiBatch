import { TestBed } from '@angular/core/testing';

import { EmailnotificationService } from './emailnotification.service';

describe('EmailnotificationService', () => {
  let service: EmailnotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailnotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
