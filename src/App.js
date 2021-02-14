import LoginPage from "./LoginPage.js";
import React, { useContext } from "react";
import UserProvider, { UserContext } from "./UserProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./LandingPage.js";
import Login from "./Login.js";

export default function App() {
  return (

    <UserProvider>
    <Router>
       
  
      <Switch>
      <Route
            path={`/`}
            component={LoginPage}
       />
       <Route
            path={`./Home`}
            component={LandingPage}
        />
         
        </Switch>

      </Router>
      </UserProvider>

    
       

   

  );
}


