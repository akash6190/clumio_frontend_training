import { Todo } from "../components/Input";
import { AddTodoAction, ADD_TODO, ToggleTodoAction, TOGGLE_TODO, DeleteTodoAction, DELETE_TODO } from "./types";

export const addTodo = (payload: AddTodoAction['payload']): AddTodoAction => ({
  type: ADD_TODO,
  payload
})

export const toggleTodo = (payload: ToggleTodoAction['payload']): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload
})

export const deleteTodo = (payload: DeleteTodoAction['payload']): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload
});
