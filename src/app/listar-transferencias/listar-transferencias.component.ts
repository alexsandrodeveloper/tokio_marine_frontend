import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { TransferenciaDTO } from '../model/transferencia.dto';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-transferencias',
  templateUrl: './listar-transferencias.component.html',
  styleUrls: ['./listar-transferencias.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule , CommonModule]
})
export class ListarTransferenciasComponent implements OnInit {
  @Input() token: string | null = null;
  transferencias: TransferenciaDTO[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit() {
    if (this.token) {
      this.transferenciaService.listarTransferencias(this.token).subscribe(response => {
        this.transferencias = response;
      }, error => {
        alert('Erro ao listar transferências.');
      });
    } else {
      alert('Token não disponível.');
    }
  }
}
