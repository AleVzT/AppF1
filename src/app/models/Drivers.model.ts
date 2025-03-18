export interface DriverInfo {
    driverId: string;
    name: string;  
    surname: string;   
    nationality: string; 
    birthday: string;   
    number: number;     
    shortName: string;      
    url: string;   
    points: number;  
    position: number;     
    wins: number | null; 
  }
  
  export interface DriverResponse {
    driver: DriverInfo;  
  }
  