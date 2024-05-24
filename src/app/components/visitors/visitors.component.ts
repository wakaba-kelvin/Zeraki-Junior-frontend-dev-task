import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css'],
})
export class VisitorsComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Loyal Customers', 'New Customers', 'Unique Customers'],
      datasets: [
        {
          label: 'Visitors',
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
  }
}
