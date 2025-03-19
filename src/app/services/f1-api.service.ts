
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  DriversChampionshipResponse,
  NextRaceResponse,
  ConstructorsChampionshipResponse,
  TeamsResponse,
  DriversByTeamResponse,
  DriversByYearResponse
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class F1ApiService {
  private apiUrl = 'https://f1api.dev/api';
  currentYear = new Date().getFullYear();

  constructor(private http: HttpClient) { }

  getRaceNext(): Observable<NextRaceResponse> {
    return this.http.get<NextRaceResponse>(`${this.apiUrl}/current/next`);
  }

  getDriversChampionship(year: number, limit: string): Observable<DriversChampionshipResponse> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<DriversChampionshipResponse>(`${this.apiUrl}/${year}/drivers-championship`, { params });
  }

  getConstructorsChampionship(year: number, limit: string): Observable<ConstructorsChampionshipResponse> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<ConstructorsChampionshipResponse>(`${this.apiUrl}/${year}/constructors-championship`, { params });
  }

  getTeams(): Observable<TeamsResponse> {
    return this.http.get<TeamsResponse>(`${this.apiUrl}/current/teams`);
  }

  getDriversByTeams(team: string): Observable<DriversByTeamResponse> {
    return this.http.get<DriversByTeamResponse>(`${this.apiUrl}/current/teams/${team}/drivers`);
  }

  getDriversByYear(year: number):  Observable<DriversByYearResponse> {
    return this.http.get<DriversByYearResponse>(`${this.apiUrl}/${year}/drivers`);
  }

}
