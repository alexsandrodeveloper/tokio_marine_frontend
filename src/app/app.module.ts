import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import routes from './app.routes';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AgendarTransferenciaComponent } from './agendar-transferencia/agendar-transferencia.component';
import { ListarTransferenciasComponent } from './listar-transferencias/listar-transferencias.component';
import { AuthService } from './services/auth.service';
import { TransferenciaService } from './services/transferencia.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AgendarTransferenciaComponent,
    ListarTransferenciasComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, TransferenciaService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
