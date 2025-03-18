import { Component, OnInit  } from '@angular/core';
import { ConstructorChampionship, DriverChampionship, Race } from 'src/app/models';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  
  upcomingRace: Race = {} as Race;

  topDrivers: DriverChampionship[] = [];
  
  topTeams: ConstructorChampionship[] = [];

  constructor(private f1ApiService: F1ApiService) { }

  ngOnInit(): void {
    this.handleNextRace();
    this.HandleDrivers();
    this.HandleTeams();
  }

  handleNextRace(): void {
    this.f1ApiService.getRaceNext().subscribe(data => {
      this.upcomingRace = data.race[0];
    });
  }

  HandleDrivers(): void {
    this.f1ApiService.getDriversChampionship(this.currentYear, '3').subscribe(data => {
      this.topDrivers = data.drivers_championship;
    });
  }

  HandleTeams(): void {
    this.f1ApiService.getConstructorsChampionship(this.currentYear, '3').subscribe(data => {
      this.topTeams = data.constructors_championship;
    });
  }

}
