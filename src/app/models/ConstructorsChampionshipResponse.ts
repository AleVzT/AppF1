export interface ConstructorsChampionshipResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: string;
    championshipId: string;
    constructors_championship: ConstructorChampionship[];
}

export interface ConstructorChampionship {
    classificationId: number;
    teamId: string;
    points: number;
    position: number;
    wins: number;
    team: Team;
}
  
export interface Team {
    teamName: string;
    country: string;
    firstAppareance: number; 
    constructorsChampionships: number;
    driversChampionships: number;
    url: string;
}
