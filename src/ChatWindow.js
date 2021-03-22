import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import { auth } from "./fire";
import "./ChatWindow.css";
import firebase from "firebase";
import "firebase/auth";
import { fs } from "./fire.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import RefreshIcon from "@material-ui/icons/Refresh";
import { UserContext } from "./UserProvider";

function ChatWindow({ selectedChat }) {
  //const dummy = useRef();
  const user = useContext(UserContext);
  const [formValue, setFormValue] = useState("");
  const [messages, setMessages] = useState([]);
  const unsub = fs.collection("Chats").doc(selectedChat).collection("messages");


  async function sendMessage(e) {
    e.preventDefault();
    if (!formValue) return;
    await unsub.add({
      messageText: formValue,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      userID: user.uid,
    });
    setFormValue("");
  }

  function createDate(secs ){
    var time = new Date(1970, 0, 1);
    time.setSeconds(secs);
    return time.toString();
  }

  return (
    <>
      <div className="ChatWindow">
        <div className="chat-title">
          {selectedChat}
        </div>

        <form className="text-form">
          <textarea
            className="text-input"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Type a message..."
            rows="2"
            placeholder="Type a message..."
            onKeyPress={(e) => {
              if (e.key === "Enter") sendMessage(e);
            }}
          ></textarea>

          <button type="button" id="sendBtn" onClick={sendMessage}>
            Send
          </button>
        </form>

        <div className="new-message-container" id="b">
          Chat Selected: {selectedChat}
        </div>

        <div className="search-bar">search bar</div>

        <div className="chat-message-list">
          <ul className="chatHistory" id="chatLog">
            {messages.map((message) => (
              <li
                key={message.id}
                className={

                  user.uid === message.userID
                    ? "chatMessageMe"
                    : "chatMessageOther"
                }
              >
              <p>
                {message.messageText}
                <br/>
                <div className= "time">
                  Sent at {createDate(message.sentAt.seconds)}
                </div>

                <br/>

                <div>

                  -by: {message.userID}


                </div>

              </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
