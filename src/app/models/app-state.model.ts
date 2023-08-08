export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}

export interface AppState {
    todos: TodoState;
}

