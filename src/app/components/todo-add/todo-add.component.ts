import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../../store/todo/todo.actions';
import { Todo } from '../../models/app-state.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  newTodo: string = '';

  constructor(private store: Store) { }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),  // Simple ID generation for demo purposes
      task: this.newTodo,
      completed: false
    };

    this.store.dispatch(addTodo({ todo }));
    this.newTodo = '';  // Clear the input field
  }
}
