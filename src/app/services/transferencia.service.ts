import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { TransferenciaDTO } from '../model/transferencia.dto';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private url = `${environment.apiUrl}/transferencias`;
  token: string='';

  constructor(private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  agendarTransferencia(transferencia: TransferenciaDTO): Observable<TransferenciaDTO> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if(token){
        headers = headers.set('Authorization', `Bearer ${token}`);
    } else{
        const errorMessage = 'Token de autenticação não encontrado.';
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    return this.http.post<TransferenciaDTO>(this.url, transferencia, { headers })
    .pipe(
      catchError((error) => {
        console.error('Erro ao agendar transferência:', error);
        return throwError('Erro ao agendar transferência. Por favor, tente novamente mais tarde.');
      })
    );
  }

  listarTransferencias(): Observable<TransferenciaDTO[]> {
    let headers = new HttpHeaders();
    const token = this.authService.getToken();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    } else {
      this.router.navigate(['/login']);
      return throwError('Token de autenticação não fornecido.');
    }

    return this.http.get<TransferenciaDTO[]>(this.url, { headers })
      .pipe(
        catchError((error) => {
          console.error('Erro ao listar transferências:', error);
          return throwError('Erro ao listar transferências. Por favor, tente novamente mais tarde.');
        })
      );
  }
}
