import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ConsutaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { EdicaoClienteComponent } from './edicao-cliente/edicao-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    ConsutaClienteComponent,
    EdicaoClienteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
