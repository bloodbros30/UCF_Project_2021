import React from "react";
import "./Sidebar.css";
import { barData } from "./barData";
import { auth } from "./fire";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Link } from "react-router-dom";


function sidebarButtonHandler(flag){


  if(flag == 0) logOut();
  else if(flag == 1) goToProfile();
  else if(flag == 2) console.log("buttons working but no functions implemented yet");
  else console.log("Something went horribly wrong");


}


async function logOut() {
  await auth.signOut();
  localStorage.clear();
  window.location.reload();
}

function goToProfile() {

  window.location.pathname = "/Profile";

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
                sidebarButtonHandler(val.flag);
              }}
            >
              <div id="img">{val.image}</div> <div id="text">{val.name}</div>
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}

export default Sidebar;
