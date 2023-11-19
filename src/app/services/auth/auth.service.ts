import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserDTO } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7288/api/Auth'; 

  constructor(private http: HttpClient) {}

  // User registration
  register(user: UserDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
      
  }

  // User login
  login(user: UserDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      map(response => {
        // Optional: Perform any processing on the response if needed
        return response;
      }),
      catchError(error => {
        return throwError(error); // Handle error
      })
    );
  }

  // Other authentication-related methods (logout, token management, etc.) can be added here
}
