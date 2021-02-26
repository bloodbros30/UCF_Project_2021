import React, { useEffect } from "react";
import "./ChatOptions.css";
import { useContext } from 'react';
import { UserContext } from "./UserProvider";

import {fs} from "./fire";


 function ChatOptions() {

  const user = useContext(UserContext);

  console.log(user);
  return (


    <div className="ChatOptions">

    
    {user.Name}

    </div>
    
  );
}

export default ChatOptions;
