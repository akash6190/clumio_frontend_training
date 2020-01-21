import { Todo } from "../components/Input";
import { Action } from "redux";

export const ADD_TODO = 'ADD_TODO';
export interface AddTodoAction extends Action<typeof ADD_TODO> {
  payload: {
    todo: Todo;
  }
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export interface ToggleTodoAction extends Action<typeof TOGGLE_TODO>  {
  payload: {
    id: string
  }
}

export const DELETE_TODO = 'DELETE_TODO';
export interface DeleteTodoAction extends Action<typeof DELETE_TODO> {
  payload: {
    id: string
  },
  metadata?: boolean
}

export type TodoActions = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

export interface AppState {
  counter: number;
  todos: Todo[]
}