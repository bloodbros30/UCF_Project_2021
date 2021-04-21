import react from 'react';
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import { fs } from "./fire";
import React, { useEffect,useState } from "react";

import './userList.css'


function UserChatList({selectedChat})
{

var dummyvariable = "dumb";
const user = useContext(UserContext);


const [chats, setChats] = useState([]);
  useEffect(() => {



      const getData = async () => {

        const chats = await Promise.all(
          user.chats.map(async (chatID) => {
            const chatDoc = await fs.collection("Chats").doc(chatID).get();
            return { ...chatDoc.data(), id: chatID };
          })
        );
        console.log(chats);
        setChats(chats);
      };
      getData();

  }, []);




    console.log(user);

    return (
      <div className='listWindow'>
        <h1 className='text'>
        {user && user.name}'s Chats:
        </h1>

        {user && user.chats &&
          chats.map((chat, key) => (
            <li
              key={key}
              className="chatItem"


            >
              <div id="text" >


                {chat.Name}

              </div>
            </li>
          ))}




      </div>
    );
};


export default UserChatList
