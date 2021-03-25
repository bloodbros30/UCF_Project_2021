import { useState } from "react";
import Sidebar from "./Sidebar.js";
import ChatOptions from "./ChatOptions.js";
import ChatWindow from "./ChatWindow.js";
import {useContext} from "react"
import { UserContext } from "./UserProvider";



import "./App.css";
import UserPage from "./UserPage.js";

function LandingPage({ handleLogout }) {
  const [selectedChat, setSelectedChat] = useState();
  const user = useContext(UserContext);

  return (
    <div className="App">
      <Sidebar />
      {user.chats !== undefined && (
        <ChatOptions selectedChat={selectedChat} setSelectedChat={setSelectedChat}  />

)}
      
      <ChatWindow selectedChat={selectedChat}  />
     
    </div>
  );
}

export default LandingPage;
