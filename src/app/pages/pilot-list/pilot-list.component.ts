import { Component, OnInit } from '@angular/core';
import { DriverDetails, GeneralTeam } from 'src/app/models';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.scss']
})
export class PilotListComponent  implements OnInit {
  selectedEscuderia = 'mercedes';

  escuderias: GeneralTeam[] = [];

  teamName: string = '';

  pilots: DriverDetails[] = []

  constructor(private f1ApiService: F1ApiService) { }

  ngOnInit(): void {
    this.handleAllTeams();
    if(this.selectedEscuderia) {
      this.HandleDrivers();
    }
  }

  HandleDrivers(): void {
    this.f1ApiService.getDriversByTeams(this.selectedEscuderia).subscribe(data => {
      this.pilots = data.drivers;
      this.teamName = data.team.teamName;
    });
  }

  handleAllTeams(): void {
    this.f1ApiService.getTeams().subscribe(data => {
      this.escuderias = data.teams;
    });
  }

  changeEscuderia() {
    this.HandleDrivers();
  }
}
