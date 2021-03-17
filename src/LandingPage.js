import { useState } from "react";
import Sidebar from "./Sidebar.js";
import ChatOptions from "./ChatOptions.js";
import ChatWindow from "./ChatWindow.js";


import "./App.css";
import UserPage from "./UserPage.js";

function LandingPage({ handleLogout }) {
  const [selectedChat, setSelectedChat] = useState();

  return (
    <div className="App">
      <Sidebar />
      <ChatOptions selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat}  />
     
    </div>
  );
}

export default LandingPage;
