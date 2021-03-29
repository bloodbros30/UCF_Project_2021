
import UserChatList from "./UserChatList.js";
import BrowseChats from "./BrowseChats.js";
import ChatSearch from "./ChatSearch.js";
import Card from './Cards/Cards'
import './ChatPage.css'
import {useContext} from "react"
import { UserContext } from "./UserProvider";

export default function ChatPage() {
  const user = useContext(UserContext);

  return (
    <div className='ChatPage'>
      {user.chats && (
      <UserChatList/>)}
      <BrowseChats/>

      <ChatSearch/>

     
  
     </div>
     
    
  );
};
