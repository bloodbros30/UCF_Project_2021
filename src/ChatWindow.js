import React from "react";
import { auth } from "./fire";
import "./ChatWindow.css";
import firebase from 'firebase';
import "firebase/auth";
import {fs} from './fire.js';







async function sendMessage(){

  var user = firebase.auth().currentUser;
  //it would be preferable to have this called outside the message function
  var uName = "defaultName"
  var iD = "defaultID"
  if (user) {
    /*
    console.log("user found")
    console.log(user.Username)
    console.log()*/
    var uName = user.uid
    var iD = user.uid
  } else {

    console.log("no user found")
  }
  var text = document.getElementById("messageField").value;
  //document.getElementById("b").innerHTML = text;
  document.getElementById("messageField").value = ''


  if(text != ""){
    var today = new Date();

    var curTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const data={
        Message: text,
        Name: uName,
        USERID: iD,
        time: curTime

      };


      const res = await fs.collection('Chats').doc('Sports').collection('Message2').doc('test').set(data);
      //will need to change message2 to be whatever message we are on probably better to just index with number

      //console.log(res); test for error messages if need be
  }




}




function ChatWindow() {




  return (
    <div className="ChatWindow">
      <div className = "conversation-list">
        convo list
      </div>
      <div className = "Sports">
        chat title
      </div>




      <div className = "text-form" >
        <textarea className='text-input'
        id="messageField"
        //value = "a"
        rows='2'
        placeholder='Type a message...'


        >
        </textarea>

        <button
        type="button"
        onClick={sendMessage}

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
