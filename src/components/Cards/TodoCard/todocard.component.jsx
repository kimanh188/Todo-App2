import "./todocard.style.css";
import { TodocardView } from "./View/todocard.view.jsx";
import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../../contexts/todo.context.jsx";
import PropTypes from "prop-types";

export function TodocardComponent({ todo, onUserActionHandler }) {
  const [isEdit, setIsEdit] = useState(false);
  const { state, dispatch } = useContext(TodosContext);

  /*  Triggert den Input wenn title von Todos "New Todo" ist */
  useEffect(() => {
    if (todo.title === "New Todo") {
      setIsEdit(true);
    }
  }, []);

  const editToggle = () => {
    setIsEdit(!isEdit);
  };

  const onCheckHandler = (event) => {
    if (!isEdit) {
      const todoid = event.currentTarget.dataset.todoid;
      const newTodos = state.todos.map((todo) => {
        if (todo.todoid === todoid) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      dispatch({
        type: "toggleDone",
        data: {
          todos: newTodos,
        },
      });
    }
  };

  return (
    <TodocardView
      todo={todo}
      onUserActionHandler={onUserActionHandler}
      isEdit={isEdit}
      editToggle={editToggle}
      onCheckHandler={onCheckHandler}
    />
  );
}

TodocardComponent.propTypes = {
  todo: PropTypes.object.isRequired,
  onUserActionHandler: PropTypes.shape({
    add: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
};
