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
  const dummy = useRef();
  const user = useContext(UserContext);
  const [formValue, setFormValue] = useState("");
  const unsub = fs.collection("Chats").doc(selectedChat).collection("messages");
  const query = unsub.orderBy("sentAt").limit(50);

  const [messages] = useCollectionData(query);

  async function sendMessage(e) {
    e.preventDefault();



    if (!formValue) return;
    //we have to grab the username from the user id here
    var currentMessageName;
    const req = await fs.collection('Users').doc(user.uid).get();
    const data  = req.data();
    if (data!= null){

      console.log("data not null");

      console.log(data.Name);
      if(data.Name) {
        console.log("I am returning a value");
        currentMessageName = data.Name;
        console.log(currentMessageName);

      }
      else {
        console.log("data is null");
        currentMessageName = "unknown username";
      }


    }
    await unsub.add({
      messageText: formValue,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      userID: user.uid,
      Name: currentMessageName
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  function createDate(secs ){
    var time = new Date(1970, 0, 1);
    time.setSeconds(secs);
    return time.toString();
  }
  async function getChatNamefromID( id){


    console.log(id);
    return  fs.collection('Chats').doc(id).get();





  }





  return (
    <>
      <div className="ChatWindow">
        <div className="chat-title" id="chatNameHere">


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

        <div className="chat-message-list">
          <ul className="chatHistory" id="chatLog">
            {messages && messages.map((message) => (
              <li key={message.id} className={

                  user.uid === message.userID
                    ? "chatMessageMe"
                    : "chatMessageOther"
                }
              >
              <p>
                {message.messageText}
                <br/>
                <div className= "time">
                  Sent at {message.sentAt && createDate(message.sentAt.seconds)}
                </div>

                <br/>

                <div>

                  -by: {message.Name}

                </div>

              </p>
              </li>
            ))}
            <span ref={dummy}></span>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
