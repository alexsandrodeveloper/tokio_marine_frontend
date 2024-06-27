import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule , CommonModule]
})
export class AuthComponent {
  authForm: FormGroup;
  @Output() tokenReceived = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticate() {
    const credentials = this.authForm.value;
    this.authService.authenticate(credentials.username, credentials.password)
      .subscribe(response => {
        this.tokenReceived.emit(response.token); // Emitir o token para quem estiver ouvindo
        console.log('Token recebido:', response.token); // Exemplo de como imprimir no console
      }, error => {
        alert('Erro na autenticação.');
      });
  }
}
