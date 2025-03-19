export interface TeamsResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    championshipId: string;
    teams: GeneralTeam[];
}
  
export interface GeneralTeam {
    teamId: string;
    teamName: string;
    teamNationality: string;
    firstAppeareance: number; 
    constructorsChampionships: number;
    driversChampionships: number;
    url: string;
}
  