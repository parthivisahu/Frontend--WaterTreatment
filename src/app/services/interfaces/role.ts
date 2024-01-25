export interface UserInterface {
    id: number;
    name: string;
    email: string;
    employeeType: string; 
}

export interface SupervisorInterface {
    id: number;
    name: string;
    email: string;
    department: string; 
}

export interface TreatmentProcess{
    name:string;
    elapsedTime:number;
}

export interface newPlants{
    name:string;
    location:string;
    gallonsPresent:Int16Array;
    temperature:Int32Array;
}

export interface UserDTO {
    username: string;
    password: string;
}


export interface PlantDetails {
    id: string;
    name: string;
    location: string;
    temperature: number;
    gallonsPresent: number;
    coagulation: number;
    flocculation: number;
    sedimentation: number;
    filtration: number;
    disinfection: number;
  }
  
  