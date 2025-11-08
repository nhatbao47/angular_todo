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

  onCreateNewTodo(item: TodoModel) {
    this.todoService.addTodo(item);
    this.todos = this.todoService.getTodos();
  }

  onToggleTodo(item: TodoModel) {
    item.completed = !item.completed;
    this.todoService.updateTodo(item);
    this.todos = this.todoService.getTodos();
  }

  onDeleteTodo(id: number) {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
