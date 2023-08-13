import { Component, OnInit } from '@angular/core';

declare let Cleave: any;

@Component({
  selector: 'app-edicao-cliente',
  templateUrl: './edicao-cliente.component.html',
  styleUrls: ['./edicao-cliente.component.css']
})
export class EdicaoClienteComponent implements OnInit{
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
