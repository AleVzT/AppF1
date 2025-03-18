
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { F1ChampionshipResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class F1ApiService {
  private apiUrl = 'https://f1api.dev/api';
  currentYear = new Date().getFullYear();

  constructor(private http: HttpClient) { }

  getRaces(): Observable<any> {
    return this.http.get(`${this.apiUrl}races`);
  }

  getDriversChampionship(year: number, limit: string): Observable<any> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get(`${this.apiUrl}/${year}/drivers-championship`, { params });
  }

  getConstructorsChampionship(year: number, limit: string): Observable<any> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get(`${this.apiUrl}/${year}/constructors-championship`, { params });
  }

  getRaceNext(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current/next`);
  }

  getTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current/teams`);
  }

  getDriversByTeams(team: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/current/teams/${team}/drivers`);
  }

}
