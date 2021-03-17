import react from 'react';
import { useContext } from 'react';
import { UserContext } from "./UserProvider";


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
            user.chats.map((val, key) => (
              <li
                key={key}
                className="chatItem"
                onClick={() => {
                }}
              >
                <div id="text">{val}</div>
              </li>
            ))}


     
  
      </div>
    );
};


export default UserChatList