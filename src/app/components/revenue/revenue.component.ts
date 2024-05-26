import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions, TooltipItem } from 'chart.js'; 

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'] 
})
export class RevenueComponent implements OnInit {
  data!: ChartData;
  options: ChartOptions = {}
  constructor(private salesService: SalesService) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    // Example data structure similar to CUSTOMER_DATA
     // Example data structure for three categories: Primary, Secondary, and IGCSE
  this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Primary School Sales',
        data: [600, 200, 520, 400, 300, 700, 800],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color
        borderColor: 'rgba(255, 99, 132, 1)', 
        borderWidth: 1
      },
      {
        label: 'Secondary School Sales',
        data: [540, 325, 702, 620, 450, 800, 900],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
        borderColor: 'rgba(54, 162, 235, 1)', // Blue color
        borderWidth: 1
      },
      {
        label: 'IGCSE Sales',
        data: [540, 325, 702, 620, 450, 800, 900],
        backgroundColor: 'rgba(255, 206, 86, 0.5)', 
        borderColor: 'rgba(255, 206, 86, 1)', 
        borderWidth: 1
      }
    ]
  };    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: textColor,
            usePointStyle: true,
          },
          onClick: (e, legendItem) => {
            // Custom legend click behavior
          },
          onHover: (e, legendItem) => {
            // Custom legend hover behavior
          }
        },
        tooltip: {
          callbacks: {
            title: (tooltipItem: TooltipItem<'line'>[]) => {
              return tooltipItem[0].label;
            },
            label: (tooltipItem: TooltipItem<'line'>) => {
              const datasetLabel = tooltipItem.dataset.label || '';
              return `${datasetLabel}: ${tooltipItem.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month',
            color: textColor
          },
          ticks: {
            color: textColor
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Sales',
            color: textColor
          },
          ticks: {
            color: textColor
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    };
  }
}
