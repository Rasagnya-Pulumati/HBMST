import { TestBed } from '@angular/core/testing';

import { HotelReviewService } from './hotel-review.service';

describe('HotelReviewService', () => {
  let service: HotelReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
