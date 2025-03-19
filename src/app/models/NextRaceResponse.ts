export interface NextRaceResponse {
    api: string;
    url: string;
    total: number;
    season: number;
    round: number;
    championship: Championship;
    race: Race[];
}

export interface Championship {
    championshipId: string;
    championshipName: string;
    url: string;
    year: number;
}

export interface Race {
    raceId: string;
    championshipId: string;
    raceName: string | null;
    schedule: RaceSchedule;
    laps: number | null;
    round: number;
    url: string | null;
    fast_lap: FastLap | null;
    circuit: Circuit;
    winner: string | null;
    teamWinner: string | null;
}
  
export interface RaceSchedule {
    race: RaceEvent;
    qualy: RaceEvent;
    fp1: RaceEvent;
    fp2: RaceEvent;
    fp3: RaceEvent;
    sprintQualy: RaceEvent | null;
    sprintRace: RaceEvent | null;
}
  
export interface RaceEvent {
    date: string;
    time: string | null;
}
  

export interface FastLap {
    fast_lap: string | null;
    fast_lap_driver_id: string | null;
    fast_lap_team_id: string | null;
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
    url: string | null;
}
  