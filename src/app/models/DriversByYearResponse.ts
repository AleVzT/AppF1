export interface DriversByYearResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: string;
    championshipId: string;
    drivers: GeneralDriver[];
}
  
export interface GeneralDriver {
    driverId: string;
    name: string;
    surname: string;
    nationality: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
    teamId: string;
}
  