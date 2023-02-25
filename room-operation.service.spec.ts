import { TestBed } from '@angular/core/testing';

import { RoomOperationService } from './room-operation.service';

describe('RoomOperationService', () => {
  let service: RoomOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
