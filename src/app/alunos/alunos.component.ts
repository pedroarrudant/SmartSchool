import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo:String = 'Alunos';
  public Alunos = [
    {nome: 'Aluno1'},
    {nome: 'Aluno2'},
    {nome: 'Aluno3'},
    {nome: 'Aluno4'},
    {nome: 'Aluno5'},
    {nome: 'Aluno6'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
