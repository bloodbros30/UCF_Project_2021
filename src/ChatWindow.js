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

  useEffect(() => {
    // eventually change to fs.collection("users").doc(selectedChat).collection("messages")

    const unsub = fs
      .collection("messages")
      .orderBy("sentAt")
      .onSnapshot((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });

    return () => unsub();
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    if (!formValue) return;
    await fs.collection("messages").add({
      messageText: formValue,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      userID: user.uid,
    });
    setFormValue("");
  }

  function createDate(secs ){


    var time =  new Date(1970, 0, 1);
    time.setSeconds(secs);
    return time.toString();




  }



  /*

  const messagesRef = fs.collection("messages");
  var collection;
  var gotMessagesAlready = false;

  //const query = collection.orderBy('sentAt').limit(25);
  //const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState("");
  const user = firebase.auth().currentUser;
  var used = false;
  var btn = document.getElementById("sendBtn");

  //btn.disabled = formValue == '';
  //console.log(messages[0]); //this is broken

  if (!user) return <></>;
  var curUserId = user.id;
  console.log(messagesRef);
  //setInterval(fillMessages(), 5000);

  console.log("HERE IS COLLECTION");

  //fillMessages();

  /*function populateMessage(collection){
  collection.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });

}*/
  /*
  async function fillMessages() {
    console.log(user);
    if (!gotMessagesAlready) {
      //do all the shit here

      //get the message from database
      collection = await messagesRef.orderBy("sentAt").limit(25).get();
      if (collection.empty) {
        console.log("information not obtained successfully");
      } else {
        var localuid = user.L;

        var list = document.getElementById("chatLog");
        list.innerHTML = "";
        collection.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());

          var aMessage = document.createElement("li");
          aMessage.innerHTML = doc.data().messageText;

          console.log("got inside first if");
          if (localuid == doc.data().userID) {
            aMessage.classList.add("chatMessageME");
            console.log(curUserId);
          } else {
            console.log(curUserId);
            console.log("failed");
            aMessage.classList.add("chatMessageOther");
          }

          list.appendChild(aMessage);
        });

        //returnFunc(collection);
      }
    }

    gotMessagesAlready = true;
  }

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      messageText: formValue,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      test: 0,
      userID: user.uid,
    });

    setFormValue("");
    fillMessages();
    //dummy.current.scrollIntoView({behavior: 'smooth'});
  };
*/
  return (
    <>
      <div className="ChatWindow">
        <div className="chat-title">{selectedChat}</div>

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
