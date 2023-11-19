import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaterTreatmentService {

  private apiUrl = 'https://localhost:7288/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getCoagulation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coagulation`);
  }

  getFlocculation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/flocculation`);
  }

  getSedimentation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sedimentation`);
  }

  getFiltration(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filtration`);
  }

  getDisinfection(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/disinfection`);
  }
}

