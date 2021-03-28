
import UserChatList from "./UserChatList.js";
import BrowseChats from "./BrowseChats.js";
import ChatSearch from "./ChatSearch.js";
import Card from './Cards/Cards'
import './ChatPage.css'

export default function ChatPage() {
  return (
    <div className='ChatPage'>
      <UserChatList/>
      <BrowseChats/>

      <ChatSearch/>

     
  
     </div>
     
    
  );
};
