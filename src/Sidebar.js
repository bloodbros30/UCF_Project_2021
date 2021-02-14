import React from "react";
import "./Sidebar.css";
import { barData } from "./barData";
import { auth } from "./fire";
import LandingPage from "./LandingPage";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function logOut()
{

  
  auth.signOut();
  localStorage.clear();
  window.location.reload(false);
  
  
}

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="column">
        {barData.map((val, key) => {
          return (
            <li
              key={key}
              className="button"
              id={window.location.pathname == val.link ? "clicked" : " "}
              onClick={() => {
               // window.location.pathname = val.link;
              }}
            >
              <div>{val.name}</div>

              
            </li>
          );
        })}
      </ul>
      <Link to="/">
        <button type="button" onClick={logOut}>
          LogOut!
         </button>
     
     </Link>
    
    </div>
  );
}

export default Sidebar;
