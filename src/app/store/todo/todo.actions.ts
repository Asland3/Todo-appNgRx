import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/app-state.model';

export const addTodo = createAction('[TODO] Add', props<{ todo: Todo }>());
export const toggleTodo = createAction('[TODO] Toggle', props<{ todoId: number }>());
export const deleteTodo = createAction('[TODO] Delete', props<{ todoId: number }>());
