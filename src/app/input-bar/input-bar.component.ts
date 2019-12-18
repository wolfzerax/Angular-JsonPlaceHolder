import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Model/Tarefa';



@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {

  constructor() { }

 // listaTarefa: Tarefa[];
  ngOnInit() {
  //  this.findAll()
  }
  //findAll(){
  //  this.getAll().subscribe((userout: Tarefa[])=>{
  //    this.Tarefa = userout;
  //  }
 // }

}
