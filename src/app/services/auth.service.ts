import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly localStorageKey = 'authToken';
  private registerUrl = `${environment.authUrl}/register`;
  private authenticateUrl = `${environment.authUrl}/authenticate`;

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, { username, password })
  }

  authenticate(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.authenticateUrl, { username, password })
      .pipe(
        tap((response: AuthResponse) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify({
            token: response.token,
            expiry: new Date().getTime() + 24 * 60 * 60 * 1000 // Expira em um dia
          }));
        })
      );
  }

  getToken(): string | null {
    const tokenItem = localStorage.getItem(this.localStorageKey);
    if (tokenItem) {
      const tokenData = JSON.parse(tokenItem);
      if (tokenData.expiry && new Date().getTime() < tokenData.expiry) {
        return tokenData.token;
      } else {
        this.clearToken();
        return null;
      }
    }
    return null;
  }

  clearToken(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
