import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListHistoryComponent } from './expense-list-history.component';

describe('ExpenseListHistoryComponent', () => {
  let component: ExpenseListHistoryComponent;
  let fixture: ComponentFixture<ExpenseListHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseListHistoryComponent]
    });
    fixture = TestBed.createComponent(ExpenseListHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
