import { Component } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {
  constructor(private dataservice:SalesService) {};

  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Mon', 'Tue'],
      datasets: [
        {
          label: 'SecSchools Sales',
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
        {
          label: 'PrimarySchool Sales',
          data: [600, 200, 520],
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
        {
          label: 'IGCSE Sales',
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
