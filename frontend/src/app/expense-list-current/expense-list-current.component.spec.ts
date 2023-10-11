import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListCurrentComponent } from './expense-list-current.component';

describe('ExpenseListCurrentComponent', () => {
  let component: ExpenseListCurrentComponent;
  let fixture: ComponentFixture<ExpenseListCurrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseListCurrentComponent]
    });
    fixture = TestBed.createComponent(ExpenseListCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
