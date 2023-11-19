import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl = 'your_api_endpoint'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getPlantNames(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/plants`);
  }
}
