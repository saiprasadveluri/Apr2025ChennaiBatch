import { TestBed } from '@angular/core/testing';

import { WhatsappNotifyService } from './whatsapp-notify.service';

describe('WhatsappNotifyService', () => {
  let service: WhatsappNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsappNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
