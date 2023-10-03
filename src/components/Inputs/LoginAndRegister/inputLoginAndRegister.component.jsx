import "./inputLoginAndRegister.style.css";
import PropTypes from "prop-types";

export function InputLoginAndRegisterComponent({
  onFormChangeHandler,
  ariaLabel,
  type,
  placeholder,
  name,
  classnames,
}) {
  return (
    <input
      aria-label={ariaLabel}
      className={`auth-input ${classnames}`}
      onChange={onFormChangeHandler}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

InputLoginAndRegisterComponent.propTypes = {
  onFormChangeHandler: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classnames: PropTypes.string,
};
