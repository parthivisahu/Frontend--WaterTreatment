import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token!: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://localhost:7288/api/Auth/', { username, password }).pipe(
      tap((response: any) => {
        const token = response.token; // Assuming the backend returns a token in the response

        if (token) {
          // Store the token securely (e.g., in-memory or in a service)
          this.storeToken(token);
        }
      })
    );
  }

  private storeToken(token: string): void {
    this.token = token;
  }

  getToken(): string | undefined {
    return this.token;
  }
}
