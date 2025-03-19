import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DriverChampionship, ConstructorChampionship } from 'src/app/models';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedYear = new Date().getFullYear();
  years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
  
  pilotsChartData: ChartData<'bar'> = { labels: [], datasets: [{ data: [], label: 'Puntos' }] };
  teamsChartData: ChartData<'bar'> = { labels: [], datasets: [{ data: [], label: 'Puntos' }] };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Top 5 Clasificación' }
    }
  };

  constructor(private f1ApiService: F1ApiService) { }
  

  ngOnInit(): void {
    this.updateCharts();
  }

  HandleDrivers(): void {
    this.f1ApiService.getDriversChampionship(this.selectedYear, '5').subscribe(data => {
      this.pilotsChartData = {
        labels: data.drivers_championship.map((driver: DriverChampionship) => `${driver.driver.name} ${driver.driver.surname}`),
        datasets: [{
          data: data.drivers_championship.map((driver: DriverChampionship) => driver.points),
          label: 'Puntos',
          backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#F4D03F'],
          borderColor: ['#D84315', '#1B5E20', '#0D47A1', '#880E4F', '#9C640C'],
          borderWidth: 1,
        }]
      };
    });
  }

  HandleTeams(): void {
    this.f1ApiService.getConstructorsChampionship(this.selectedYear, '5').subscribe(data => {
      this.teamsChartData = {
        labels: data.constructors_championship.map((team: ConstructorChampionship) => team.team.teamName),
        datasets: [{
          data: data.constructors_championship.map((team: ConstructorChampionship) => team.points),
          label: 'Puntos',
          backgroundColor: ['#E74C3C', '#2ECC71', '#3498DB', '#9B59B6', '#F39C12'],
          borderColor: ['#C0392B', '#27AE60', '#2980B9', '#8E44AD', '#D68910'],
          borderWidth: 1,
         
        }]
      };
    });
  }

  updateCharts() {
    this.HandleDrivers();
    this.HandleTeams();
  }
}
