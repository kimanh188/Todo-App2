import "./todoInput.style.css";

import PropTypes from "prop-types";

export function TodoInputComponent({ todo, onChangeHandler }) {
  return (
    <>
      <input
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={onChangeHandler}
        className={"todo-input"}
        type={"text"}
        placeholder={"What's on your mind, taskmaster?"}
        name={todo.title}
        aria-label={"Write your todo here"}
      />
      <button
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={"todo-btn"}
        type={"submit"}
      >
        Save
      </button>
    </>
  );
}

TodoInputComponent.propTypes = {
  todo: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
