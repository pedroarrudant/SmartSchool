import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  professores = [
    {id:1, nome:'Professor1', sobrenome:'Sobrenome1'},
    {id:1, nome:'Professor2', sobrenome:'Sobrenome2'},
    {id:1, nome:'Professor3', sobrenome:'Sobrenome3'},
    {id:1, nome:'Professor4', sobrenome:'Sobrenome4'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
