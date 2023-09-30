import React from "react";
import '@fontsource/roboto/400.css';
import GoogleSignin2 from "../img/btn_google_signin_light_pressed_web.png"
// import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";


import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>FunRoom</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in sig2">
          <img
            onClick={googleSignIn}
            src={GoogleSignin2}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
