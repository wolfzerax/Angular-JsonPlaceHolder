import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Model/Tarefa';
import { TarefaService } from '../servicos/tarefa.service';

@Component({
  selector: 'app-listatarefas',
  templateUrl: './listatarefas.component.html',
  styleUrls: ['./listatarefas.component.css']
})
export class ListatarefasComponent implements OnInit {

  private busca:number;
  listaTarefas: Tarefa =null;
  constructor(private tarefaSrv: TarefaService) { }

  ngOnInit() {
    
  
  }
  private procurar() {
    this.tarefaSrv.getOne(this.busca).subscribe((res: Tarefa)=>{
     
        this.listaTarefas = res

});
  }

}

