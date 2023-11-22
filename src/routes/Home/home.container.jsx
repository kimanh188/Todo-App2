import { HomeView } from "./view/home.view.jsx";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context.jsx";
import { useNavigate } from "react-router";
import {
  createNewUserWithEmailAndPassword,
  signInThisUserWithEmailAndPassword,
} from "../../firebase/auth/auth.emailAndPassword.jsx";
import { Helmet } from "react-helmet-async";

export function HomeContainer() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onFormChangeHandler = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const setFormStatus = () => {
    setIsLogin(!isLogin);
  };

  const onSubmitRegisterHandler = async (event) => {
    event.preventDefault();
    switch (true) {
      case !formValue.email:
        setErr("The Email field must not be empty");
        return;
      case !emailRegex.test(formValue.email):
        setErr("The email must be a valid email format");
        return;
      case !formValue.password:
        setErr("The Password field must not be empty");
        return;
      case !(formValue.password.length >= 8):
        setErr("The password must be at least 8 characters");
        return;
      case !formValue.confirmPassword:
        setErr("The Password field must not be empty");
        return;
      case formValue.password !== formValue.confirmPassword:
        setErr("The Password do not match");
        return;
    }
    try {
      await createNewUserWithEmailAndPassword(
        formValue.email,
        formValue.password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setErr("This email already exists");
          break;
        case "auth/invalid-email":
          setErr("The email is invalid");
          break;
        case "auth/operation-not-allowed":
          setErr(
            "An error has occurred here. Please contact support. [Operation not allowed]"
          );
          break;
        case "auth/weak-password":
          setErr("The password is too weak");
          break;
        default:
          setErr(err.code);
          break;
      }
    }
  };

  const onSubmitLoginHandler = async (event) => {
    event.preventDefault();
    switch (true) {
      case !formValue.email:
        setErr("The Email field must not be empty.");
        return;
      case !emailRegex.test(formValue.email):
        setErr("The email must be a valid email format.");
        return;
      case !formValue.password:
        setErr("The Password field must not be empty.");
        return;
    }
    try {
      await signInThisUserWithEmailAndPassword(
        formValue.email,
        formValue.password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          setErr("The combination of e-mail and password is wrong");
          break;
        default:
          setErr(err.code);
          break;
      }
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/todos");
    }
  }, [currentUser]);

  return (
    <div>
      <Helmet title={"Todo Flow"}></Helmet>
      <HomeView
        err={err}
        user={currentUser}
        onFormChangeHandler={onFormChangeHandler}
        onSubmitHandler={{
          register: onSubmitRegisterHandler,
          login: onSubmitLoginHandler,
        }}
        isLogin={{ state: isLogin, set: setFormStatus }}
      />
    </div>
  );
}
