export interface DriversByTeamResponse {
    api: string;
    url: string;
    total: number;
    limit: string;
    season: number;
    teamId: string;
    team: TeamDetails;
    drivers: DriverDetails[];
}

export interface TeamDetails {
    teamId: string;
    teamName: string;
    country: string;
    constructorsChampionships: number;
    driversChampionships: number;
    points: number;
    position: number;
    wins: number;
    url: string;
}
  
export interface DriverDetails {
    driver: DriverTeam;
}
  
export interface DriverTeam {
    driverId: string;
    name: string;
    surname: string;
    nationality: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
    points: number | null;
    position: number;
    wins: number | null;
}
  