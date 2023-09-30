import React from "react";
import GoogleSignin2 from "../img/btn_google_signin_light_pressed_web.png"
// import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
     <img src="/logo512.png" alt="ReactJs logo" width={55} height={55} />
      <h2 className="wel" >Welcome to Fun Room</h2>
     
      <p className="wel2">Sign in with Google to chat with random people</p>
      <button className="sign-in sig">
        <img
          onClick={googleSignIn}
          src={GoogleSignin2}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
