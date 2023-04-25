import { TestBed } from '@angular/core/testing';

import { MutualService } from './mutual.service';

describe('MutualService', () => {
  let service: MutualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
