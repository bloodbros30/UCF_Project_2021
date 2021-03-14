import React from "react";
import { useRef, useState } from 'react';
import { auth } from "./fire";
import "./ChatWindow.css";
import firebase from 'firebase';
import "firebase/auth";
import {fs} from './fire.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatWindow() {
  //const dummy = useRef();
  const messagesRef = fs.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');
  const user = firebase.auth().currentUser;

  var btn = document.getElementById('sendBtn');
  //btn.disabled = formValue == '';

  const sendMessage = async (e) =>
  {
    e.preventDefault();

    await messagesRef.add({
      messageText: formValue,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      test: 0,
      userID: user.uid,
    })

    setFormValue('');
    //dummy.current.scrollIntoView({behavior: 'smooth'});
  }




  return (<>
    <main> {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}</main>

    <div className = "ChatWindow">
      <div className = "conversation-list">
        conversation list
      </div>

      <div className = "chat-title">
        Sports
      </div>

      <form className="text-form">
        <textarea className='text-input'
          value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message..."
          rows='2'
          placeholder='Type a message...'>
        </textarea>
        <button type="button" id = "sendBtn" onClick={sendMessage}>
          Send
        </button>
      </form>
      

      <div className = "new-message-container" id = "b">
        new msg container
      </div>
      <div className = "search-bar">
        search bar
      </div>
      <div className = "chat-message-list">
      </div>
    </div>
  </>);
  }

function ChatMessage(misc) {
  const { text, uid, photoURL } = misc.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  </>)
}

export default ChatWindow;
