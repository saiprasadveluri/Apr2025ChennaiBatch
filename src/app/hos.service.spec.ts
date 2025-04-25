import { TestBed } from '@angular/core/testing';

import { hosservice } from './hos.service';

describe('HosService', () => {
  let service: hosservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(hosservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
