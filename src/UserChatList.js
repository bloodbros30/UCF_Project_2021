import react from 'react';
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import { fs } from "./fire";


import './userList.css'


function UserChatList()
{

    const user = useContext(UserContext);

    console.log(user);

    return (
      <div className='listWindow'>
        <h1 className='text'>
        {user && user.name}'s Chats:
        </h1>

        {user && user.chats &&
          user.chats.map((chat, key) => (
            <li
              key={key}
              className="chatItem"
             
              
            >
              <div id="text" >

               
                {chat}

              </div>
            </li>
          ))}




      </div>
    );
};


export default UserChatList
