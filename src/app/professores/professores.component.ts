import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  ProfessorSelecionado: Professor;

  professores = [
    {id:1, nome:'Professor1', sobrenome:'Sobrenome1'},
    {id:2, nome:'Professor2', sobrenome:'Sobrenome2'},
    {id:3, nome:'Professor3', sobrenome:'Sobrenome3'},
    {id:4, nome:'Professor4', sobrenome:'Sobrenome4'}
  ];

  SelecionarProfessor(professor: Professor){
    this.ProfessorSelecionado = professor;
  }

  DeselecionarProfessor(){
    this.ProfessorSelecionado = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
