import React from "react";
import "./Sidebar.css";
import {barData} from "./barData";

function Sidebar() {
  return (
    <div className="Sidebar">

      <ul className = "column">
    {barData.map((val, key)=> {



          return(

              <li key={key}
              className="button"
              id ={window.location.pathname == val.link ? "clicked" : " "}
              onClick={()=> {window.location.pathname = val.link;}}




              >

                <div>
                  {val.name}
                </div>


              </li>

            );




    })}
    </ul>



    </div>
  );
}

export default Sidebar;
