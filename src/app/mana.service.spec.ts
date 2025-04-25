import { TestBed } from '@angular/core/testing';

import { ManaService} from './mana.service';

describe('ManaService', () => {
  let service: ManaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
