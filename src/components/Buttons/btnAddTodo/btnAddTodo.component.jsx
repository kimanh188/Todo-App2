import { SVGAdd } from "../../../svgController/svgController.jsx";

export function BtnAddTodoComponent() {
  //Doesn't need onClickHandler because this component is wrapped in a section, on which the listener is set
  return (
    <button className={"btn-userTodoAction"}>
      <SVGAdd classNames={"svg64"} />
    </button>
  );
}
