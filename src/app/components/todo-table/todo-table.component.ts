import { Component, Input } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import { ToStringPipe } from '../../pipes/to-string.pipe';

@Component({
  selector: 'todo-table',
  standalone: true,
  imports: [ CommonModule, ToStringPipe],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss'
})
export class TodoTableComponent {
  @Input() data: TodoModel[] = [];
}
