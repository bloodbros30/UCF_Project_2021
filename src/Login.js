import React from "react";
import { auth } from "./fire";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  function handleSignIn() {
    auth.signInWithEmailAndPassword(email, password);
  }
  /*      This is used to sign in with google/gmail, it also lets us get the users profile pic and info 
  function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  function signOut(){
    firebase.auth.signOut();
  }
  function initFirebaseAuth(){ //initiate firebase auth which i know we have already
    firebase.auth().onStateChanged(authStateObserver);
  }
 function getProfilePictureURL(){ //Returns the sign in users profile
   return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
 }
 function getUserName(){ //Returns users display name from google
   return firebase.auth().currentUser.displayName;
 }
function isUserSignedIn(){
  return !!firebase.auth().currentUser;
}
  }
*/
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={() => handleSignIn()}>Sign In</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign Up</button>
              <p>
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
