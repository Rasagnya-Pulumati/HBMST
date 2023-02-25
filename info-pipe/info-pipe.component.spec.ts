import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPipeComponent } from './info-pipe.component';

describe('InfoPipeComponent', () => {
  let component: InfoPipeComponent;
  let fixture: ComponentFixture<InfoPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
