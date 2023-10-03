import PropTypes from "prop-types";
import { TodoInputComponent } from "../../../Inputs/TodoInput/todoInput.component.jsx";

export function TodoFormView({ todo, onChangeHandler, onSubmitHandler }) {
  return (
    <div className={"input-container"}>
      <form className={"form"} onSubmit={onSubmitHandler}>
        <TodoInputComponent todo={todo} onChangeHandler={onChangeHandler} />
      </form>
    </div>
  );
}

TodoFormView.propTypes = {
  todo: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};
