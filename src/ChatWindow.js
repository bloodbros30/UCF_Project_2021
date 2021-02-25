import React from "react";
import { auth } from "./fire";
import "./ChatWindow.css";
import firebase from 'firebase';
import "firebase/auth";
import {fs} from './fire.js';

async function sendMessage(){

  var text = document.getElementById("messageField").value;
  document.getElementById("b").innerHTML = text;
  document.getElementById("messageField").value = ''
  var iD = "aaabbbccc"


  var today = new Date();

  var curTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const data={
      Message: text,
      Name: "TEST",
      USERID: iD,
      time: curTime

    };


    const res = await fs.collection('Chats').doc('Sports').collection('Message2').doc('test').set(data);
    //console.log(res); test for error messages if need be





}




function ChatWindow() {




  return (
    <div className="ChatWindow">
      <div className = "conversation-list">
        convo list
      </div>
      <div className = "chat-title">
        chat title
      </div>

      <div className = "text-form" >
        <textarea class='text-input'
        id="messageField"
        //value = "a"
        rows='2'
        placeholder='Type a message...'


        >
        </textarea>

        <button
        type="button"
        onClick={sendMessage}

        //onclick="sendMessage()"



        >
        Send

        </button>

      </div>

      <div className= "new-message-container" id = "b">
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
