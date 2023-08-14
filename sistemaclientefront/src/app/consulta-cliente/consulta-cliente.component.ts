import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/Environment/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit{

  clientes: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
    ){}

  ngOnInit(): void {

    this.spinner.show();

    this.httpClient.get(enviroment.apiClientes).subscribe
    ({next:(data) => {this.clientes = data as any[];}}).add(() => {this.spinner.hide();})    
  }  
}
