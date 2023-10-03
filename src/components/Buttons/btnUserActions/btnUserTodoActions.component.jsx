import PropTypes from "prop-types";
import "./btnUserTodoActions.style.css";

export function BtnUserTodoActionsComponent({
  svgComponent,
  onClickHander,
  todo,
}) {
  return (
    <div>
      <button
        data-todoid={todo.todoid}
        onClick={onClickHander}
        className={"btn-userTodoAction"}
      >
        {svgComponent}
      </button>
    </div>
  );
}

BtnUserTodoActionsComponent.propTypes = {
  svgComponent: PropTypes.element.isRequired,
  onClickHander: PropTypes.func.isRequired,
  todo: PropTypes.object,
};
