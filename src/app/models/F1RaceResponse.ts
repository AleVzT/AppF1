
export interface Championship {
    championshipId: string;
    championshipName: string;
    url: string;
    year: number;
}
    
export interface Schedule {
    race: {
        date: string;
        time: string;
    };
    qualy: {
        date: string | null;
        time: string | null;
    };
    fp1: {
        date: string | null;
        time: string | null;
    };
    fp2: {
        date: string | null;
        time: string | null;
    };
    fp3: {
        date: string | null;
        time: string | null;
    };
    sprintQualy: {
        date: string | null;
        time: string | null;
    };
    sprintRace: {
        date: string | null;
        time: string | null;
    };
}

export interface Circuit {
    circuitId: string;
    circuitName: string;
    country: string;
    city: string;
    circuitLength: string;
    lapRecord: string;
    firstParticipationYear: number;
    corners: number;
    fastestLapDriverId: string;
    fastestLapTeamId: string;
    fastestLapYear: number;
    url: string;
}

export interface FastLap {
    fast_lap: string | null;
    fast_lap_driver_id: string | null;
    fast_lap_team_id: string | null;
}

export interface Race {
    raceId: string;
    championshipId: string;
    raceName: string;
    schedule: Schedule;
    laps: number;
    round: number;
    url: string;
    fast_lap: FastLap;
    circuit: Circuit;
    winner: string | null;
    teamWinner: string | null;
}

export interface F1RaceResponse {
    api: string;
    url: string;
    total: number;
    season: number;
    round: number;
    championship: Championship;
    race: Race[];
}
  