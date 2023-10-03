import PropTypes from "prop-types";
import "./../todo.style.css";
import { NavbarComponent } from "../../../components/Navbar/navbar.component.jsx";
import { TodocardComponent } from "../../../components/Cards/TodoCard/todocard.component.jsx";
import { BtnAddTodoComponent } from "../../../components/Buttons/btnAddTodo/btnAddTodo.component.jsx";
import { NoTodosComponent } from "../../../components/NoTodos/noTodos.component.jsx";

export function TodoView({ todos, onUserActionHandler }) {
  return (
    <>
      <div className={"todo-route-background"}></div>
      <section className={"todo-route"}>
        <section className={"navbar-container"}>
          <NavbarComponent
            username={"Markus"}
            onClickHandler={onUserActionHandler.logout}
          />
        </section>
        <div className={"todo-route-content"}>
          <section className={"todos-container container"}>
            {todos.length === 0 ? (
              <NoTodosComponent />
            ) : (
              todos.map((todo) => {
                return (
                  <TodocardComponent
                    key={todo.todoid}
                    todo={todo}
                    onUserActionHandler={onUserActionHandler}
                  />
                );
              })
            )}
          </section>
          <section
            onClick={onUserActionHandler.add}
            className={"todo-add-button-container"}
          >
            <BtnAddTodoComponent onClickHandler={onUserActionHandler.add} />
          </section>
        </div>
      </section>
    </>
  );
}

TodoView.propTypes = {
  todos: PropTypes.array.isRequired,
  onUserActionHandler: PropTypes.shape({
    add: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
};
