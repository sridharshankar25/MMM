import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraDetailsComponent } from './tra-details.component';

describe('TraDetailsComponent', () => {
  let component: TraDetailsComponent;
  let fixture: ComponentFixture<TraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
