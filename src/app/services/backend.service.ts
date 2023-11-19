import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private baseUrl = 'https://localhost:7288/api'; // Adjust the URL to match your .NET backend URL

  constructor(private http: HttpClient,  private snackBar: MatSnackBar) { }
  approveFlow(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/flows/approve/${id}`, {})
      .pipe(
        // Show notification upon approval success
        tap(() => {
          this.snackBar.open('Request approved successfully', 'Close', {
            duration: 3000, // Set duration for the notification
          });
        })
      );
  }

  rejectFlow(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/flows/reject/${id}`, {})
      .pipe(
        // Show notification upon rejection success
        tap(() => {
          this.snackBar.open('Request rejected successfully', 'Close', {
            duration: 3000, // Set duration for the notification
          });
        })
      )
    }
  
// Pending
  getPending(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Pending`);
  }

  addPending(stats: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Pending`, stats);
  }

  rejectPending(stats: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Pending/`, {});

  }

  // WaterPlants
  getWaterPlants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/WaterTreatmentPlant`);
  }

  addWaterPlant(plant: any): Observable<any> {
    console.log(plant);
    return this.http.post<any>(`${this.baseUrl}/WaterTreatmentPlant`, plant);
    
  }

  editWaterPlant(plant:any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/WaterTreatmentPlant`, {})
  }

  deleteWaterPlant(plant:any) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/WaterTreatmentPlant`)
  }

  // TreatmentStats
  getTreatmentStats(plant:any) :Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/TreatmentStats`)
  }
  deleteTreatmentStats(plant:any) :Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/TreatmentStats`)
  }

  approveRequest(requestId: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/approve/${requestId}`, {});
  }

  rejectRequest(requestId: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reject/${requestId}`, {});
  }

  getPendingRequests(){
    return this.http.get<any>(`${this.baseUrl}/pending/`)
  }

}



