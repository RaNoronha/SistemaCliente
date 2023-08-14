import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { enviroment } from 'src/Environment/environment';
import Swal from 'sweetalert2';

declare let Cleave: any;

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})

export class CadastroClienteComponent implements OnInit {  

  constructor(
    private httpclient: HttpClient,
    private spinner: NgxSpinnerService
    ){}

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(14)]),
    telefone: new FormControl('', [Validators.required, Validators.minLength(16)]),
    email: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', [Validators.required])
  });

  get form(): any {return this.formCadastro.controls;}  

  onSubmit(): void {

    this.spinner.show();

    this.httpclient.post(enviroment.apiClientes, this.formCadastro.value).subscribe({
      next:(data:any) => {
        Swal.fire({
          icon:'success',
          title: `Cliente ${data.nome}, cadastrado com sucesso.`        
        });
        this.formCadastro.reset();
      },
    }).add(() => {this.spinner.hide();});
  }

  ngOnInit(){
    new Cleave('#cpf', {
      blocks: [3, 3, 3, 2],
      delimiters: ['.', '.', '-'],
      numericOnly: true
      });

      new Cleave('#telefone', {
        blocks: [0,2, 1, 4, 4],
        delimiters: ['(',') ', ' ', '-'],
        numericOnly: true
        });
  }
  
}
