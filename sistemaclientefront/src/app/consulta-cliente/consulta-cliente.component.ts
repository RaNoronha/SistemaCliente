import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/Environment/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

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

  onDelete(id: string): void {
    Swal.fire({
      icon:'question',
      iconColor: 'yellow',
      title:`Deseja excluir o cliente?`,
      showConfirmButton: true,
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed){
        this.spinner.show();
        this.httpClient.delete(enviroment.apiClientes + "/" + id).subscribe
        ({
          next: (data: any) => {
            Swal.fire({
              icon:'success',
              title: `Cliente ${data.nome}, excluído com sucesso.`        
            });
            this.ngOnInit();
          }
        }).add(() => {this.spinner.hide();})
      }
      else{
        Swal.close();
      }
    })
  }
}
