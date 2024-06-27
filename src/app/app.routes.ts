import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AgendarTransferenciaComponent } from './agendar-transferencia/agendar-transferencia.component';
import { ListarTransferenciasComponent } from './listar-transferencias/listar-transferencias.component';
import { RegisterComponent } from './register/register.component'; // Importe o RegisterComponent

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Rota padrão redireciona para /auth
  { path: 'auth', component: AuthComponent }, // Rota para o componente AuthComponent
  { path: 'agendar-transferencia', component: AgendarTransferenciaComponent }, // Rota para o componente AgendarTransferenciaComponent
  { path: 'listar-transferencias', component: ListarTransferenciasComponent }, // Rota para o componente ListarTransferenciasComponent
  { path: 'register', component: RegisterComponent }, // Rota para o componente RegisterComponent
  { path: '**', redirectTo: '/auth', pathMatch: 'full' } // Redireciona para /auth em caso de rota não encontrada
];

export { routes };
