import PropTypes from "prop-types";
import EditSVG from "./../svgs/edit.svg?react";
import DeleteSVG from "./../svgs/delete.svg?react";
import AddSVG from "./../svgs/add.svg?react";
import GoogleSVG from "./../svgs/google.svg?react";
import GithubSVG from "./../svgs/github.svg?react";
import InstagramSVG from "./../svgs/instagram.svg?react";
import TwitterSVG from "./../svgs/twitter-x.svg?react";

export function SVGGithub({ classNames, onclickHandler }) {
  return (
    <>
      <GithubSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}

export function SVGInstagram({ classNames, onclickHandler }) {
  return (
    <>
      <InstagramSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}

export function SVGTwitter({ classNames, onclickHandler }) {
  return (
    <>
      <TwitterSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}

export function SVGGoogle({ classNames, onclickHandler }) {
  return (
    <>
      <GoogleSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}
export function SVGEdit({ classNames, onclickHandler }) {
  return (
    <>
      <EditSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}

export function SVGDelete({ classNames, onclickHandler }) {
  return (
    <>
      <DeleteSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}

export function SVGAdd({ classNames, onclickHandler }) {
  return (
    <>
      <AddSVG onClick={onclickHandler} className={` ${classNames}`} />
    </>
  );
}

SVGDelete.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};
SVGAdd.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};

SVGEdit.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};
SVGGoogle.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};
SVGGithub.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};
SVGInstagram.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};
SVGTwitter.propTypes = {
  classNames: PropTypes.string.isRequired,
  onclickHandler: PropTypes.func,
};
