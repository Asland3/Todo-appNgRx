import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { AppState, Todo, TodoState } from '../../models/app-state.model';

export const initialState: TodoState = {
    todos: []
  };
  
  export const todoReducer = createReducer(
    initialState,
    // Add todo
    on(TodoActions.addTodo, (state, { todo }) => {
      return { ...state, todos: [...state.todos, todo] };
    }),
    // Toggle todo
    on(TodoActions.toggleTodo, (state, { todoId }) => {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    }),
    // Delete todo
    on(TodoActions.deleteTodo, (state, { todoId }) => {
      return { ...state, todos: state.todos.filter(todo => todo.id !== todoId) };
    })
  );
  