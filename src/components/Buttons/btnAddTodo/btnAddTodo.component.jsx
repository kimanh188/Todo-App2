import { SVGAdd } from "../../../svgController/svgController.jsx";

export function BtnAddTodoComponent() {
  //Benötigt keinen onClickHandler da diese Componente in eine Section gewickelt wird, auf den der Listener gesetzt wird
  return (
    <button className={"btn-userTodoAction"}>
      <SVGAdd classNames={"svg64"} />
    </button>
  );
}
