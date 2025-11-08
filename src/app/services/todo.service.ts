import { TodoModel } from "../models/todo.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos: TodoModel[] = [];

    constructor() {
        // Initial dummy data
        this.todos = [
            new TodoModel(1, 'Sample Todo 1', 'This is a sample todo item', false),
            new TodoModel(2, 'Sample Todo 2', 'This is another sample todo item', true)
        ];
    }

    getTodos() {
        return this.todos;
    }

    addTodo(item: TodoModel) {
        this.todos.push(item);
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    updateTodo(updatedItem: TodoModel) {
        const index = this.todos.findIndex(todo => todo.id === updatedItem.id);
        if (index !== -1) {
            this.todos[index] = updatedItem;
        }
    }
}