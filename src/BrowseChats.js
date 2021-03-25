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
        setChats(snapshot.docs.map((doc) => { return {...doc.data(), id: doc.id } }))
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
                chat= {chat}
                user = {user}
                chatID = {chat.id}
              />
            ))}
            
        </ul>

      </div>
    );

};


export default BrowseChats
