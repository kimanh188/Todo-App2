import "./footer.wrapper.css";

import { Outlet } from "react-router";
import {
  SVGGithub,
  SVGInstagram,
  SVGTwitter,
} from "../../svgController/svgController.jsx";

export function FooterWrapper() {
  return (
    <>
      <Outlet /> {/*Lädt den Content der Child Route*/}
      <footer className={"footer-container"}>
        <div className={"footer-left-side"}>
          <p>Magic Todos</p>
        </div>
        <div className={"footer-right-side"}>
          <a
            href="https://github.com/Devcodino"
            rel={"noopener noreferrer"}
            target="_blank"
          >
            <SVGGithub classNames={"svg32 social-media-icon"} />
          </a>
          <a
            href="https://instagram.com"
            rel={"noopener noreferrer"}
            target="_blank"
          >
            <SVGInstagram classNames={"svg32 social-media-icon"} />
          </a>
          <a
            href="https://twitter.com"
            rel={"noopener noreferrer"}
            target="_blank"
          >
            <SVGTwitter classNames={"svg32 social-media-icon"} />
          </a>
        </div>
      </footer>
    </>
  );
}
