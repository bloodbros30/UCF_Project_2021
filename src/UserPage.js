import React, { useEffect } from "react";
import {fs} from "./fire";
import LoginPage from './LoginPage.js';
import { useContext } from 'react';
import { UserContext } from "./UserProvider";

function UserPage() {
  const user = useContext(UserContext);
  console.log(user);
    return(
      <div className = "userCard">
        <div className = "UserImg">

        </div>

        <div className = "usercardInfo">
          <p >
          <strong>Name:</strong> {user.Name}
          </p>

        </div>

        <div className = 'row mt'>
          <div className = 'col s12 m6 l6 x l6'>
            <p>
              <strong>Name:</strong> {user.Name}
            </p>
            <p>
              <strong>Age:</strong> {user.Age}
            </p>
            <p>
              <strong>Interests:</strong> {user.Interests}
            </p>
            <p>
              <strong>Address:</strong> {user.Address}
            </p>
            <p>
              <strong>Username:</strong> {user.Username}
            </p>
          </div>
        </div>
      </div>

    );
}
export default UserPage;
