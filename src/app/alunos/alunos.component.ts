import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo:String = 'Alunos';
  public Alunos = [
    'Aluno1',
    'Aluno2',
    'Aluno3',
    'Aluno4',
    'Aluno5',
    'Aluno6',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
