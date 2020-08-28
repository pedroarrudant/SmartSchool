import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public AlunoSelecionado: Aluno;
  public modalRef: BsModalRef;

  titulo = 'Alunos';
  public alunos = [
    {id: 1, nome: 'Aluno1', sobrenome: 'Sobrenome1', telefone: '12345678'},
    {id: 2, nome: 'Aluno2', sobrenome: 'Sobrenome2', telefone: '12345678'},
    {id: 3, nome: 'Aluno3', sobrenome: 'Sobrenome3', telefone: '12345678'},
    {id: 4, nome: 'Aluno4', sobrenome: 'Sobrenome4', telefone: '12345678'},
    {id: 5, nome: 'Aluno5', sobrenome: 'Sobrenome5', telefone: '12345678'},
    {id: 6, nome: 'Aluno6', sobrenome: 'Sobrenome6', telefone: '12345678'},
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: [''],
      sobrenome: [''],
      telefone: ['']
    });
  }

  alunoSubmit(){
    // var aluno = {id: 1, nome: 'Pedro', sobrenome: 'Arruda', telefone: '12345678'};
    // this.alunoForm.get('telefone')
    // this.alunos.push(aluno);
    console.log(this.alunoForm.value);
    // console.log(this.alunos);
  }

  SelecaoAluno(aluno:Aluno){
    this.AlunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  DeselecionarAluno(){
    this.AlunoSelecionado = null;
  }
}
