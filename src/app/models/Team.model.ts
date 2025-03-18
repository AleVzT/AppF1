export interface TeamModel {
    teamId: string;
    teamName: string;
    teamNationality: string;
    firstAppeareance: string | null;
    constructorsChampionships: number | null;
    driversChampionships: number | null;
    url: string;
}