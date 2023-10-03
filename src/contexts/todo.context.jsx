import {createContext, useEffect, useReducer} from "react";

export const TodosContext = createContext();

function setLocalTodos(array){
  localStorage.setItem("todos", JSON.stringify(array));
}

const reducerFunction = (state, action)=>{
  switch (action.type){
    case "add":
      //Funktioniert
      setLocalTodos([...state.todos, action.data.todos])
      return {
        todos:[...state.todos, action.data.todos]
      }

    case "delete":
      //Speichere das Array in den Local Storage
      setLocalTodos(action.data.todos)

      return {
        todos: action.data.todos
      }
    case "edit":
      //Speichere das Array in den Local Storage
      setLocalTodos(action.data.todos)
      return {
        todos: action.data.todos
      }
    case "toggleDone":
      setLocalTodos(action.data.todos)
      //Speichere das Array in den Local Storage
      return {
        todos: action.data.todos
      }

    case "setLocal":
      //Speichere das Array mit bereits vorhanden Todos in den State. (Nur bei Reload der Page)
      return {
        todos: action.data.todos
      }
    default :
      return state
  }
}

export const TodosContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    todos: []
  })

  useEffect(() => {
    //Welche Items sind im Local Storage eigentlich drin
    const todosArrayString = localStorage.getItem("todos");
    const  todosArray = JSON.parse(todosArrayString)

    //Add Items zum State
    if(todosArray){
      dispatch({
        type: "setLocal",
        data: {
          todos: todosArray
        }
      })
    }
  }, []);

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      {children}
    </TodosContext.Provider>
  )

}
