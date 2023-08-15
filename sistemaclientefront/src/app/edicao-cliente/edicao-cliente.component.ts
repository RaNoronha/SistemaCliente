import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { enviroment } from 'src/Environment/environment';
import Swal from 'sweetalert2';

declare let Cleave: any;

@Component({
  selector: 'app-edicao-cliente',
  templateUrl: './edicao-cliente.component.html',
  styleUrls: ['./edicao-cliente.component.css']
})
export class EdicaoClienteComponent implements OnInit{

  constructor(
    private httpclient: HttpClient,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void{

      const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

      this.spinner.show();

      this.httpclient.get(enviroment.apiClientes + "/" + id).subscribe
      ({
        next: (data:any) => {this.formEdicao.patchValue(data);}
      }).add(() => {this.spinner.hide();})

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

  formEdicao = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(14)]),
    telefone: new FormControl('', [Validators.required, Validators.minLength(16)]),
    email: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', [Validators.required])
  });

  get form(): any {return this.formEdicao.controls;}

  onSubmit(): void{

    this.spinner.show();

    this.httpclient.put(enviroment.apiClientes, this.formEdicao.value).subscribe
    ({
      next: (data:any) => {
        Swal.fire(`${data.nome} alterado com sucesso!!`);
      },
    }).add(() => {this.spinner.hide();});
  }
 
}
