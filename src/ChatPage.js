
import UserChatList from "./UserChatList.js";
import BrowseChats from "./BrowseChats.js";
import ChatSearch from "./ChatSearch.js";
import Card from './Cards/Cards';
import RecommendedChats from './recommendedChats.js';
import './ChatPage.css'
import {useContext} from "react"
import { UserContext } from "./UserProvider";

export default function ChatPage() {
const user = useContext(UserContext);

  return (
    <div className='ChatPage'>

    {user && user.chats !== undefined && (
      <UserChatList/>

)}

      <BrowseChats/>

      <ChatSearch/>




     </div>


  );
};
