import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  getAllTarefas(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getOne(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
