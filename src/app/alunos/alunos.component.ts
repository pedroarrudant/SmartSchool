import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  AlunoSelecionado: Aluno;

  titulo = 'Alunos';
  public alunos = [
    {id: 1, nome: 'Aluno1', sobrenome: 'Sobrenome1'},
    {id: 2, nome: 'Aluno2', sobrenome: 'Sobrenome2'},
    {id: 3, nome: 'Aluno3', sobrenome: 'Sobrenome3'},
    {id: 4, nome: 'Aluno4', sobrenome: 'Sobrenome4'},
    {id: 5, nome: 'Aluno5', sobrenome: 'Sobrenome5'},
    {id: 6, nome: 'Aluno6', sobrenome: 'Sobrenome6'},
  ];

  SelecaoAluno(aluno:Aluno){
    this.AlunoSelecionado = aluno;
  }

  DeselecionarAluno(){
    this.AlunoSelecionado = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
