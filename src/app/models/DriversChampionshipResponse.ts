export interface DriversChampionshipResponse {
    api: string;
    url: string;
    limit: number;
    total: number;
    season: string;
    championshipId: string;
    drivers_championship: DriverChampionship[];
}

export interface DriverChampionship {
    classificationId: number;
    driverId: string;
    teamId: string;
    points: number;
    position: number;
    wins: number;
    driver: Driver;
    team: TeamDriver;
}

export interface Driver {
    name: string;
    surname: string;
    nationality: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
}

export interface TeamDriver {
    teamId: string;
    teamName: string;
    country: string;
    firstAppareance: number
    constructorsChampionships: number;
    driversChampionships: number; 
    url: string;
}

  
  
  
  