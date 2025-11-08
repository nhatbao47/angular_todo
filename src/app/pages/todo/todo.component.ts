import { Component, OnInit } from '@angular/core';
import { NewTodoComponent } from '../../components/new-todo/new-todo.component';
import { TodoTableComponent } from '../../components/todo-table/todo-table.component';
import { TodoModel } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-page',
  standalone: true,
  imports: [
    NewTodoComponent,
    TodoTableComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent implements OnInit {
  todos: TodoModel[] = [];
  
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
