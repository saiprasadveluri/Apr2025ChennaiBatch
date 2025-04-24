import { TestBed } from '@angular/core/testing';

import { DataSourseService } from './data-sourse.service';

describe('DataSourseService', () => {
  let service: DataSourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
