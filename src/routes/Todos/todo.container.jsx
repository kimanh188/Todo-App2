import { v4 as uuidv4 } from "uuid";
import { TodoView } from "./view/todo.view.jsx";
import { useContext, useEffect } from "react";
import { TodosContext } from "../../contexts/todo.context.jsx";
import { SignOutUser } from "../../firebase/auth/auth.logout.jsx";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/user.context.jsx";
import { Helmet } from "react-helmet-async";

export function TodoContainer() {
  const { state, dispatch } = useContext(TodosContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const onTodoAddHandler = () => {
    const newTodo = {
      title: "New Todo",
      todoid: uuidv4(),
      done: false,
    };
    dispatch({
      type: "add",
      data: {
        todos: newTodo,
      },
    });
  };

  const onTodoDeleteHandler = (event) => {
    const id = event.currentTarget.dataset.todoid;

    const newTodos = state.todos.filter((todo) => {
      return todo.todoid !== id;
    });

    dispatch({
      type: "delete",
      data: {
        todos: newTodos,
      },
    });
  };

  const LogoutHandler = () => {
    SignOutUser();
    navigate("/");
  };

  return (
    <>
      <Helmet title={"Todo Flow - Dashboard"}></Helmet>
      <TodoView
        todos={state.todos}
        currentUser={currentUser}
        onUserActionHandler={{
          add: onTodoAddHandler,
          delete: onTodoDeleteHandler,
          logout: LogoutHandler,
        }}
      />
    </>
  );
}
