import react from 'react';
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import { fs } from "./fire";
import {useState, useEffect} from 'react';


import './userList.css'


function UserChatList()
{

    const user = useContext(UserContext);

    console.log(user);
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

    return (
      <div className='listWindow'>
        <h1 className='text'>
        {user && user.name}'s Chats:
        </h1>

        {
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
