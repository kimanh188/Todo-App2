import "./todoForm.style.css";
import { useContext, useState } from "react";
import { TodoFormView } from "./View/todoForm.view.jsx";
import { TodosContext } from "../../../contexts/todo.context.jsx";
import PropTypes from "prop-types";

export function TodoFormComponent({ todo, editToggle }) {
  const { state, dispatch } = useContext(TodosContext);

  const [inpuvalue, setInpuvalue] = useState({
    value: "",
    todoid: "",
  });

  const onChangeHandler = (event) => {
    event.stopPropagation();
    const value = event.target.value;
    setInpuvalue({
      value: value,
      todoid: todo.todoid,
    });
  };

  const onTodoSubmitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const todoid = todo.todoid;
    const value = inpuvalue;
    const newTodos = state.todos.map((todo) => {
      if (todo.todoid === todoid) {
        return { ...todo, title: value.value };
      }
      return todo;
    });
    dispatch({
      type: "edit",
      data: {
        todos: newTodos,
      },
    });
    editToggle();
  };

  return (
    <TodoFormView
      todo={todo}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onTodoSubmitHandler}
    />
  );
}

TodoFormComponent.propTypes = {
  todo: PropTypes.object.isRequired,
  editToggle: PropTypes.func.isRequired,
};
