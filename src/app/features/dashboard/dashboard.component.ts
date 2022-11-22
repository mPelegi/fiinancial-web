import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('expensesInvestments', { static: true })
  expensesInvestments!: ElementRef<HTMLCanvasElement>;
  public chartExpensesInvestments: any;

  @ViewChild('expensesInvestments', { static: true })
  allocatedValues!: ElementRef<HTMLCanvasElement>;
  public chartAllocatedValues: any;

  private labels = ['Abril', 'Maio'];

  private datasets = [
    {
      label: 'Investimentos',
      data: [455, 396, 310, 150, 123, 494],
      borderColor: '#000688',
      backgroundColor: '#000688',
    },
    {
      label: 'Gastos',
      data: [192, 112, 465, 289, 199, 270],
      borderColor: '#1ca7e8',
      backgroundColor: '#1ca7e8',
    },
  ];

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chartExpensesInvestments = new Chart('expensesInvestments', {
      type: 'bar',
      data: {
        labels: ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'],
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    this.chartAllocatedValues = new Chart('allocatedValues', {
      type: 'doughnut',
      data: {
        labels: [
          'Energia',
          'Aluguel',
          'Alimentação'
        ],
        datasets: [{
          label: 'Valor percentual (%)',
          data: [15, 28, 13],
          backgroundColor: [
            '#020393',
            '#002bb5',
            '#84dbff'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Valores alocados'
          }
        }
      },
    });
  }
}
