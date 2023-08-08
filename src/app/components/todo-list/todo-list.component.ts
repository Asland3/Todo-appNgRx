import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/app-state.model';
import { deleteTodo } from '../../store/todo/todo.actions';
import { AppState } from '../../models/app-state.model';
import * as TodoActions from '../../store/todo/todo.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(state => state.todos.todos);
  }

  ngOnInit(): void { }

  toggleCompletion(id: number) {
    this.store.dispatch(TodoActions.toggleTodo({ todoId: id }));
  }  

  deleteTodo(id: number) {
    this.store.dispatch(deleteTodo({ todoId: id }));
  }
}
