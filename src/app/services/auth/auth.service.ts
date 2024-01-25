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
  private mongoDBApiUrl = 'mongodb://localhost:27017'; 

  constructor(private http: HttpClient) {}

  private userRoles: string[] = []; 

  getUserRoles(): string[] {
    return this.userRoles;
  }
  // User registration
  register(user: UserDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  // User login
  login(user: UserDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error); 
      })
    );
  }

  sendDataToMongoDB(userData: UserDTO): Observable<any> {
    const requestBody = {
      username: userData.username,
    };

    return this.http.post<any>(this.mongoDBApiUrl, requestBody).pipe(
      catchError(error => {
        return throwError(error); 
      })
    );
  }
}
