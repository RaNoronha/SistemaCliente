import { Component, OnInit } from '@angular/core';

declare let Cleave: any;

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

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
