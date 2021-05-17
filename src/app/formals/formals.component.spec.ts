import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalsComponent } from './formals.component';

describe('FormalsComponent', () => {
  let component: FormalsComponent;
  let fixture: ComponentFixture<FormalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
