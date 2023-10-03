import { BtnUserTodoActionsComponent } from "../../../Buttons/btnUserActions/btnUserTodoActions.component.jsx";
import {
  SVGDelete,
  SVGEdit,
} from "../../../../svgController/svgController.jsx";
import { TodoFormComponent } from "../../../Forms/TodoForm/todoForm.component.jsx";
import PropTypes from "prop-types";

export function TodocardView({
  todo,
  onUserActionHandler,
  isEdit,
  editToggle,
  onCheckHandler,
}) {
  return (
    <div className={`todo-card-container ${todo.done ? "Done" : ""}`}>
      <div
        data-todoid={todo.todoid}
        onClick={onCheckHandler}
        className={"todo-left-side"}
      >
        {isEdit ? (
          <TodoFormComponent todo={todo} editToggle={editToggle} />
        ) : (
          <p>{todo.title}</p>
        )}
      </div>
      <div className={"todo-right-side"}>
        <BtnUserTodoActionsComponent
          onClickHander={editToggle}
          todo={todo}
          svgComponent={<SVGEdit classNames={"svg32"} />}
        />
        <BtnUserTodoActionsComponent
          onClickHander={onUserActionHandler.delete}
          todo={todo}
          svgComponent={<SVGDelete classNames={"svg32"} />}
        />
      </div>
    </div>
  );
}

TodocardView.propTypes = {
  todo: PropTypes.object.isRequired,
  onUserActionHandler: PropTypes.shape({
    add: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
  isEdit: PropTypes.bool.isRequired,
  editToggle: PropTypes.func.isRequired,
  onCheckHandler: PropTypes.func.isRequired,
};
