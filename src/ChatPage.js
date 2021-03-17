
import UserChatList from "./UserChatList.js";
import BrowseChats from "./BrowseChats.js";

import './ChatPage.css'

export default function ChatPage() {
  return (
    <div className='ChatPage'>
      <UserChatList/>
      <BrowseChats/>
     </div> 
  );
};

