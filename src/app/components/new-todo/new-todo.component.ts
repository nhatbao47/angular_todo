import { Component, EventEmitter, Output } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss'
})
export class NewTodoComponent {
  @Output() createNewTodoEvent = new EventEmitter<TodoModel>();
  item: TodoModel = new TodoModel(0, '', false);
  
  onCreate() {
    this.createNewTodoEvent.emit(this.item);
    this.item = new TodoModel(0, '', false);
  }
}
