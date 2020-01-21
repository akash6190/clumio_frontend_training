import { Reducer } from "redux";
import { AppState, TodoActions, TOGGLE_TODO, DELETE_TODO } from "./types";

const appReducer: Reducer<AppState, TodoActions> = (state: AppState = {
  counter: 0,
  todos: []
}, action) => {
  switch (action.type) {
    // case 'INCREMENT':
    //   return {
    //     ...state,
    //     counter: state.counter + 1
    //   }
    // case 'DECREMENT':
    //   return {
    //     ...state,
    //     counter: state.counter - 1
    //   }

    case 'ADD_TODO': {
      const { todo } = action.payload
      return {
        ...state,
        todos: [...state.todos, todo]
      }
    }

    case TOGGLE_TODO: {
      const { id: tid } = action.payload;

      const idx = state.todos.findIndex(({id}) => id === tid);

      if(idx > -1) {
        const todo = state.todos[idx];
        const newTodos = [...state.todos]
        newTodos[idx] = {...todo, completed: !todo.completed};
        return {
          ...state, 
          todos: newTodos
        }
      }

      return state;
    }

    case DELETE_TODO: 
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload.id),
      }
    default:
      return state;
  }
}

export default appReducer;