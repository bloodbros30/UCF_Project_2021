import React, { useState, useContext, useEffect } from "react";
import { auth, fs } from "./fire";
import LandingPage from "./LandingPage.js";
import "./LoginPage.css";
import { UserContext } from "./UserProvider";

const LoginPage = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  function handleSignIn() {
    auth.signInWithEmailAndPassword(email, password);
  }

  async function handleSignup() {
    clearErrors();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        fs.collection("users").doc(uid).set({
          email,
          chats: []
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="LoginPage">
      {user ? (
        <LandingPage />
      ) : (
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
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button onClick={handleSignup}>Sign Up</button>
                  <p>
                    Have an account?{" "}
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign in
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LoginPage;
