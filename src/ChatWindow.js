import React from "react";
import "./ChatWindow.css";

function ChatWindow() {
  return (
    <div className="ChatWindow">
      <div className = "conversation-list">
        convo list
      </div>
      <div className = "chat-title">
        chat title
      </div>
      <div className = "text-form">
        text form
      </div>
      <div className= "new-message-container">
        new msg container
      </div>
      <div className= "search-bar">
        search bar
      </div>
      <div className="chat-message-list">
      </div>
    </div>
  );
}

export default ChatWindow;
