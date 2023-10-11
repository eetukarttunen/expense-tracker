import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrls: ['./circular-chart.component.css']
})
export class CircularChartComponent implements AfterViewInit {
  public chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyCircularChart', {
      type: 'doughnut',
      data: {
        labels: ['Sales', 'Profit', 'Expenses'],
        datasets: [
          {
            data: [40, 30, 30], // Set your percentage data
            backgroundColor: ['blue', 'limegreen', 'red'],
          },
        ],
      },
      
    });
  }
}
