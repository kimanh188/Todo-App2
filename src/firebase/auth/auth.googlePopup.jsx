import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {firebaseApp} from "../firebase.settings.js";

const provider = new GoogleAuthProvider();
//Sorgt dafür dass der User einen Google Account asuwählen muss
provider.setCustomParameters({
  prompt: "select_account"
})

const auth = getAuth(firebaseApp);

export const SignInWithGooglePopup = () => {
  signInWithPopup(auth, provider)
}