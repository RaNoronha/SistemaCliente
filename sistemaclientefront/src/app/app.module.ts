import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { EdicaoClienteComponent } from './edicao-cliente/edicao-cliente.component';
import { ContatoComponent } from './contato/contato.component';

const routes : Routes = [
  {path : 'cadastro-cliente', component : CadastroClienteComponent},
  {path : 'consulta-cliente', component : ConsultaClienteComponent},
  {path : 'edicao-cliente/:id', component : EdicaoClienteComponent},
  {path : 'contato', component : ContatoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConsultaClienteComponent,
    CadastroClienteComponent,
    EdicaoClienteComponent,
    ContatoComponent    
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [], 
  bootstrap: [AppComponent]
})

export class AppModule { }
