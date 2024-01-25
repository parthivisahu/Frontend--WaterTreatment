import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl = 'http:https://localhost:7288/api'; 

  constructor(private http: HttpClient) {}

  getPlantNames(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/plants`);
  }
}
