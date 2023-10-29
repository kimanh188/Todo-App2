import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const TodosContext = createContext();

function setLocalTodos(array) {
  localStorage.setItem("todos", JSON.stringify(array));
}

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "add":
      setLocalTodos([...state.todos, action.data.todos]);
      return {
        todos: [...state.todos, action.data.todos],
      };

    case "delete":
      //Store the array in the Local Storage
      setLocalTodos(action.data.todos);
      return {
        todos: action.data.todos,
      };

    case "edit":
      setLocalTodos(action.data.todos);
      return {
        todos: action.data.todos,
      };

    case "toggleDone":
      setLocalTodos(action.data.todos);
      return {
        todos: action.data.todos,
      };

    case "setLocal":
      //Save the array with already existing todos into the state. (Only on reload of the page)
      return {
        todos: action.data.todos,
      };
    default:
      return state;
  }
};

export const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    todos: [],
  });

  useEffect(() => {
    //Get Items from Local Storage
    const todosArrayString = localStorage.getItem("todos");
    const todosArray = JSON.parse(todosArrayString);

    //Add Items to the state
    if (todosArray) {
      dispatch({
        type: "setLocal",
        data: {
          todos: todosArray,
        },
      });
    }
  }, []);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

TodosContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
