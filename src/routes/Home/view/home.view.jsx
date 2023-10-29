import PropTypes from "prop-types";

import "./../home.style.css";
import { SignInWithGooglePopup } from "../../../firebase/auth/auth.googlePopup.jsx";
import { SVGGoogle } from "../../../svgController/svgController.jsx";
import { InputLoginAndRegisterComponent } from "../../../components/Inputs/LoginAndRegister/inputLoginAndRegister.component";
import { BtnFormComponent } from "../../../components/Buttons/FormButtons/btnForm.component.jsx";
import { SocialMediaButtonComponent } from "../../../components/Buttons/SocialMediaButton/socialMediaButton.component.jsx";

import { useState } from "react";

export function HomeView({
  isLogin,
  onFormChangeHandler,
  onSubmitHandler,
  err,
}) {
  const [isAuthFormVisible, setAuthFormVisible] = useState(false);

  const handleAuthFormToggle = () => {
    setAuthFormVisible(!isAuthFormVisible);
  };

  return (
    <>
      <section className="home-route">
        <div className="home-route-wrapper">
          <header className="titles-container container">
            <h1 className="main-title">Todo Flow</h1>
            <h4 className="main-slogan">Pilot your tasks, navigate your day</h4>
          </header>

          <main className="home-route-main-content container">
            <section className="auth-form-section">
              {isAuthFormVisible ? (
                <div className="auth-form-container">
                  <header className="auth-form-titles">
                    <h3>{isLogin.state ? "Log in" : "Sign up"}</h3>
                    {isLogin.state ? (
                      <p>
                        ... or create an account &gt;{" "}
                        <span onClick={isLogin.set} className="auth-span-link">
                          Sign up
                        </span>
                      </p>
                    ) : (
                      <p>
                        I have an account -&gt;{" "}
                        <span onClick={isLogin.set} className="auth-span-link">
                          Login
                        </span>
                      </p>
                    )}
                  </header>
                  <form
                    onSubmit={
                      isLogin.state
                        ? onSubmitHandler.login
                        : onSubmitHandler.register
                    }
                    className={"auth-form"}
                  >
                    <InputLoginAndRegisterComponent
                      onFormChangeHandler={onFormChangeHandler}
                      ariaLabel={"Insert your Email for Login"}
                      placeholder={"Email"}
                      type={"email"}
                      name={"email"}
                      classnames={"form-input"}
                    />
                    <InputLoginAndRegisterComponent
                      onFormChangeHandler={onFormChangeHandler}
                      ariaLabel={"Insert your Password for Login"}
                      placeholder={"Password"}
                      type={"password"}
                      name={"password"}
                      classnames={"form-input"}
                    />
                    {!isLogin.state ? (
                      <InputLoginAndRegisterComponent
                        onFormChangeHandler={onFormChangeHandler}
                        ariaLabel={"Confirm your Password for Login"}
                        placeholder={"Confirm Password"}
                        type={"password"}
                        name={"confirmPassword"}
                        classnames={"form-input"}
                      />
                    ) : null}
                    <section className={"form-submit-section"}>
                      <BtnFormComponent
                        text={isLogin.state ? "Log in" : "Sign up"}
                        type={"submit"}
                      />
                    </section>
                  </form>
                  <section className={"auth-social-media-container"}>
                    <p>or log in with</p>
                    <div className={"auth-social-media-buttons"}>
                      <SocialMediaButtonComponent
                        SVGIcon={
                          <SVGGoogle
                            onclickHandler={SignInWithGooglePopup}
                            classNames={"svg48"}
                          />
                        }
                      />
                    </div>

                    <section className={"errorMessage-container"}>
                      <small>{err}</small>
                    </section>
                  </section>
                </div>
              ) : (
                <BtnFormComponent
                  text={"Login"}
                  type={"submit"}
                  onClickHandler={handleAuthFormToggle}
                />
              )}
            </section>
          </main>
        </div>
      </section>
    </>
  );
}

HomeView.propTypes = {
  isLogin: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    set: PropTypes.func.isRequired,
  }),
  onFormChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.shape({
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }),
  err: PropTypes.string,
};
