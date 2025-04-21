import { TestBed } from '@angular/core/testing';

import { EmailnotifierService } from './emailnotifier.service';

describe('EmailnotifierService', () => {
  let service: EmailnotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailnotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
