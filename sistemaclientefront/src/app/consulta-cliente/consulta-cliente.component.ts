import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/Environment/environment';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit{

  clientes: any[] = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get(enviroment.apiClientes).subscribe
    ({next:(data) => {this.clientes = data as any[];}})
  }  
}
