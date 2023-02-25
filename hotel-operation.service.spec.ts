import { TestBed } from '@angular/core/testing';

import { HotelOperationService } from './hotel-operation.service';

describe('HotelOperationService', () => {
  let service: HotelOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
