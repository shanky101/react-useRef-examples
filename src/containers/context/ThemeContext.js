import { createContext } from "react";

const defaultTodoState = [];
export const ThemeContext = createContext("light");
export const TodoContext = createContext(defaultTodoState);

export function TodoReducer(state = defaultTodoState, action) {
  console.log("TodoReducer - Action", action);
  switch (action.type) {
    case "create": {
      console.log("TodoReducer - create", action);
      return [
        ...state,
        {
          id: action.id,
          message: action.message,
          completed: false,
        },
      ];
    }
    case "delete":
      return state.filter((item) => item.id == action.id);
    case "toggle":
      return state.map((item) => {
        if (item.id == action.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
    case "edit":
      return state.map((item) => {
        if (item.id == action.id) {
          return {
            ...item,
            message: action.message,
          };
        } else {
          return item;
        }
      });
    default:
      throw new Error("Unknown action");
  }
}
