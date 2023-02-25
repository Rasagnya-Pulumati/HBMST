import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDtoComponent } from './booking-dto.component';

describe('BookingDtoComponent', () => {
  let component: BookingDtoComponent;
  let fixture: ComponentFixture<BookingDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
