

export interface ConstructorChampionship {
    classificationId: number;
    teamId: string;
    points: number | null;
    position: number;
    wins: number | null;
    team: TeamContructor;
}

export interface TeamContructor {
    teamId: string;
    teamName: string;
    country: string;
    firstAppareance: number;
    constructorsChampionships: number;
    driversChampionships: number;
    url: string;
}

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
