import { Component, OnInit } from '@angular/core';
import { ConstructorChampionship } from 'src/app/models';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  currentYear = new Date().getFullYear();
  teams: ConstructorChampionship[] = [];
  selectedYear = new Date().getFullYear();

  constructor(private f1ApiService: F1ApiService) { }
  
/*   teams = [
    { name: 'Red Bull', logo: 'assets/images/redbull.jpg', headquarters: 'Milton Keynes, UK', engine: 'Honda', teamPrincipal: 'Christian Horner' },
    { name: 'Mercedes', logo: 'assets/images/mercedes.jpg', headquarters: 'Brackley, UK', engine: 'Mercedes', teamPrincipal: 'Toto Wolff' },
    { name: 'Ferrari', logo: 'assets/images/ferrari.jpg', headquarters: 'Maranello, Italy', engine: 'Ferrari', teamPrincipal: 'Frédéric Vasseur' }
  ]; */

  ngOnInit(): void {
    this.HandleTeams();
  }

  HandleTeams(): void {
    this.f1ApiService.getConstructorsChampionship(this.currentYear, '10').subscribe(data => {
      this.teams = data.constructors_championship;
    });
  }

}
