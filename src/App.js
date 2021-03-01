import LoginPage from "./LoginPage.js";
import React, { useContext } from "react";
import UserProvider, { UserContext } from "./UserProvider";
//import "./login.test.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage.js";
import UserPage from "./UserPage.js";


export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path={`/`} component={LoginPage} />
          <Route path={`/Home`} component={LandingPage} />
          <Route path={`/Profile`} component={UserPage} />
        </Switch>
      </Router>
    </UserProvider>
  );
}
