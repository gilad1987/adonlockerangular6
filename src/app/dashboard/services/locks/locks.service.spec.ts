import { TestBed, inject } from '@angular/core/testing';

import { LocksService } from './locks.service';

describe('LocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocksService]
    });
  });

  it('should be created', inject([LocksService], (service: LocksService) => {
    expect(service).toBeTruthy();
  }));
});
