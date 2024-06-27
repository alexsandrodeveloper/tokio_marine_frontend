import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule , CommonModule]
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  registerUser(): void {
    this.authService.register(this.username, this.password)
      .subscribe(
        response => {
          console.log('Usuário registrado com sucesso!', response);
          this.router.navigate(['/auth']);
        },
        error => {
          console.error('Erro ao registrar usuário:', error);
        }
      );
  }
}
