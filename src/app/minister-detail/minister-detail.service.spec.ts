import { TestBed, inject } from '@angular/core/testing';

import { MinisterDetailService } from './minister-detail.service';

describe('MinisterDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinisterDetailService]
    });
  });

  it('should be created', inject([MinisterDetailService], (service: MinisterDetailService) => {
    expect(service).toBeTruthy();
  }));
});
