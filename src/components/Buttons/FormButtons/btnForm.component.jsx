import PropTypes from "prop-types";

import "./btnForm.style.css"
export function BtnFormComponent({text, type, onClickHandler}) {
  return (
    <div className={"btn-form-container"}>
      <button onClick={onClickHandler} className={"btn-form"} type={type}>
        {text}
      </button>
    </div>
  );
}

BtnFormComponent.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickHandler: PropTypes.func
}

