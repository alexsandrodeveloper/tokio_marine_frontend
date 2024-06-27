import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferenciaDTO } from '../model/transferencia.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private url = `${environment.apiUrl}/transferencias`;

  constructor(private http: HttpClient) { }

  agendarTransferencia(transferencia: TransferenciaDTO, token: string): Observable<TransferenciaDTO> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<TransferenciaDTO>(this.url, transferencia, { headers });
  }

  listarTransferencias(token: string): Observable<TransferenciaDTO[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<TransferenciaDTO[]>(this.url, { headers });
  }
}
