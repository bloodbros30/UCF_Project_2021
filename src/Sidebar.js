import React from "react";
import "./Sidebar.css";
import { barData } from "./barData";
import { auth } from "./fire";
import LandingPage from "./LandingPage";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


async function logOut()
{
  await auth.signOut();
  localStorage.clear();
  window.location.reload();
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
               /*this is here as a placeholder so that in the future we may
               connect it to other components*/
              }}
            >
 
              <div id="img">{val.image}</div> {" "}

              <div id="text">{val.name}</div>


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
