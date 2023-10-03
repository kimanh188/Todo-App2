import "./navbar.style.css";
import PropTypes from "prop-types";

import { DateComponent } from "./Date/date.component.jsx";
import { WeatherComponent } from "./Weather/weather.component.jsx";

export function NavbarComponent({ username, onClickHandler }) {
  return (
    <nav className={"navbar"}>
      <div className={"nav-left-side"}>
        <p>Hello, {username || "Unknown"}!</p>
      </div>

      <div className="nav-center">
        <DateComponent />
        <WeatherComponent />
      </div>

      <div className={"nav-right-side"}>
        <p onClick={onClickHandler} className={"nav-span-btn"}>
          Logout
        </p>
      </div>
    </nav>
  );
}

NavbarComponent.propTypes = {
  username: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};