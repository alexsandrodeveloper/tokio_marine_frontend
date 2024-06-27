import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferenciaService } from '../services/transferencia.service';
import { AuthService } from '../services/auth.service';
import { TransferenciaDTO } from '../model/transferencia.dto';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendar-transferencia',
  templateUrl: './agendar-transferencia.component.html',
  styleUrls: ['./agendar-transferencia.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule , CommonModule]
})
export class AgendarTransferenciaComponent implements OnInit {
  @Input() token: string | null = null;
  transferenciaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transferenciaService: TransferenciaService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.transferenciaForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0.01)]],
      taxa: [0],
      dataTransferencia: [new Date(), Validators.required],
      dataAgendamento: [new Date()],
      taxaCalculada: [0]
    });

    // Recupera o token ao inicializar
    this.token = this.authService.getToken();
    console.log('Token:', this.token);  }

  agendar() {
    if (this.token && this.transferenciaForm.valid) {
      const transferencia: TransferenciaDTO = this.transferenciaForm.value;
      this.transferenciaService.agendarTransferencia(transferencia, this.token).subscribe(response => {
        alert('Transferência agendada com sucesso!');
      }, error => {
        alert('Erro ao agendar transferência.');
      });
    } else {
      alert('Formulário inválido ou token não disponível.');
    }
  }
}
