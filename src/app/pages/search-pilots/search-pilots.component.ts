import { Component, OnInit } from '@angular/core';
import { GeneralDriver } from 'src/app/models';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-search-pilots',
  templateUrl: './search-pilots.component.html',
  styleUrls: ['./search-pilots.component.scss']
})
export class SearchPilotsComponent implements OnInit {
  years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
  searchCriteria = {
    year: new Date().getFullYear(),
    name: ''
  };

  pilots: GeneralDriver[] = [];
  filteredPilots: GeneralDriver[] = [];
  isLoading: boolean = false;

  constructor(private f1ApiService: F1ApiService) { }

  ngOnInit(): void {
    this.searchPilots();
  }

  async searchPilots(): Promise<void> {
    const { year } = this.searchCriteria;
    if (!year) {
      this.filteredPilots = [];
      return;
    }

    this.isLoading = true;
    this.f1ApiService.getDriversByYear(year).subscribe({
      next: (data) => {
        this.pilots = data.drivers || [];
        this.filterPilotsByName();
      },
      error: (error) => {
        console.error('Error fetching pilots:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  filterPilotsByName(): void {
    const { name } = this.searchCriteria;
    console.log('filterPilotsByName', name);
    
    this.filteredPilots = this.pilots.filter((pilot: GeneralDriver) => {
      return name.length >= 4
        ? pilot.name.toLowerCase().includes(name.toLowerCase()) ||
          pilot.surname.toLowerCase().includes(name.toLowerCase())
        : true;
    });
  }
}
