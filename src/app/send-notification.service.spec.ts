import { TestBed } from '@angular/core/testing';

import { SendNotificationService } from './send-notification.service';

describe('SendNotificationService', () => {
  let service: SendNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
