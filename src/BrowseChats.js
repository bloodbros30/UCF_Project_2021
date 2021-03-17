import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import {fs} from "./fire";
import ChatItem from "./ChatItem"


import './userList.css'

 function BrowseChats()
{

    const [chats, setChats] = useState([]);

    useEffect(() => {
        fs.collection("Chats").onSnapshot((snapshot) =>
          setChats(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    

    var curChat = "";

    const user = useContext(UserContext);

  
  
  
    return (
      <div className="ChatOptions" id="window">
          
  
        <ul className="chatList" id="curList">

        
        {chats && 
            chats.map((chat) => (
                <ChatItem 
                name = {chat.Name}
                tags = {chat.Tags}
                user = {user}
              />
            ))}
        </ul>
  
      </div>
    );

};


export default BrowseChats