import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpfeedbackComponent } from './empfeedback.component';

describe('EmpfeedbackComponent', () => {
  let component: EmpfeedbackComponent;
  let fixture: ComponentFixture<EmpfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
