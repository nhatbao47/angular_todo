import { Component } from '@angular/core';
import { NewTodoComponent } from '../../components/new-todo/new-todo.component';
import { TodoTableComponent } from '../../components/todo-table/todo-table.component';

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
export class TodoComponent {

}
