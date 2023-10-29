import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase.settings.js";

const provider = new GoogleAuthProvider();
//ensures that the user is prompted to select an account
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth(firebaseApp);

export const SignInWithGooglePopup = () => {
  signInWithPopup(auth, provider);
};
