import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private baseUrl = 'http://localhost:7288'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendNotificationToSupervisor(message: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send-notification`, { message });
  }
}
