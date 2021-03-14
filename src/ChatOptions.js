import React, { useEffect } from "react";
import "./ChatOptions.css";
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import {fs} from "./fire";


async function createNewChat(){
  var chatName = prompt("Enter the name of your chat: ", "your chat name here");

  if(chatName == ""){
    while(chatName == "") 
      chatName = prompt("Enter the name of your chat:(please don't leave empty) ", "your, tags, here, in, this, format");
    }

  var tagText = prompt("Enter a comma separated list of tags for the chat", "tags here");

  if(tagText == ""){
    while(tagText == "") 
      tagText = prompt("Enter a comma separated list of tags for the chat (please don't leave empty) ", "your chat name here");
      //This will ensure that no one enters empty text that messes up the firebase
    }


  var currentChat = ""; //this should be filled with a default chat that is saved for the user in future

  var separatedTags = [];
  var tagNumber  = 0;
  var curWord = "";
  if(tagText != null && chatName!=null){
    for( var i = 0; i < tagText.length; i++){

      // put tags into an array
      if(tagText.charAt(i) == ','){
        // tags are in comma separated list, so words end at commas

        separatedTags[tagNumber] = curWord;
        tagNumber += 1;
        curWord = "";
        // resets to an empty word for the next tag

      }else 
        curWord += tagText.charAt(i); //we dont want to include the comma
        //potential for locating spaces and removing them if we want in future
    }

    separatedTags[tagNumber] = curWord;

    const data = {Tags: separatedTags}

    const res = await fs.collection('Chats').doc(chatName).set(data);
    }else alert("Create new chat canceled!");


  var list = document.getElementById('curList');

  var newChat = document.createElement('li');
  newChat.innerHTML = chatName;
  newChat.classList.add("chatItem");
  list.appendChild(newChat);

  }

 function ChatOptions() {

  var curChat = "";

  const user = useContext(UserContext);

  console.log(user);
  console.log(user.chats);
  //console.log(data);

  return (
    <div className="ChatOptions" id="window">
      <button  onClick={createNewChat} className="butt">
        +New Chat
      </button>

      <ul className="chatList" id="curList">

      <li className="name">  Hello! {user.name} </li>
      </ul>

    </div>
  );
}

export default ChatOptions;
