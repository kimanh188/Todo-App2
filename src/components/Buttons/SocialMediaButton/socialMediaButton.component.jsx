import PropTypes from "prop-types";
import "./socialMediaButton.style.css";

export function SocialMediaButtonComponent({ SVGIcon }) {
  return (
    <>
      <button className={"social-media-button"}>{SVGIcon}</button>
    </>
  );
}
SocialMediaButtonComponent.propTypes = {
  SVGIcon: PropTypes.element.isRequired,
};
