import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularChartComponent } from './circular-chart.component';

describe('CircularChartComponent', () => {
  let component: CircularChartComponent;
  let fixture: ComponentFixture<CircularChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularChartComponent]
    });
    fixture = TestBed.createComponent(CircularChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
