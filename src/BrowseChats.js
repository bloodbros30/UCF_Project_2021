import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import {fs} from "./fire";
import ChatItem from "./ChatItem"


import './BrowseChats.css'

async function createNewChat() {
  var chatName = prompt("Enter the name of your chat: ", "your chat name here");

  if (chatName == "") {
    while (chatName == "")
      chatName = prompt(
        "Enter the name of your chat:(please don't leave empty) ",
        "your, tags, here, in, this, format"
      );
  }

  var tagText = prompt(
    "Enter a comma separated list of tags for the chat",
    "tags here"
  );

  if (tagText == "") {
    while (tagText == "")
      tagText = prompt(
        "Enter a comma separated list of tags for the chat (please don't leave empty) ",
        "your chat name here"
      );
    //This will ensure that no one enters empty text that messes up the firebase
  }

  var currentChat = ""; //this should be filled with a default chat that is saved for the user in future

  var separatedTags = [];
  var tagNumber = 0;
  var curWord = "";
  if (tagText != null && chatName != null) {
    for (var i = 0; i < tagText.length; i++) {
      // put tags into an array
      if (tagText.charAt(i) == ",") {
        // tags are in comma separated list, so words end at commas

        separatedTags[tagNumber] = curWord;
        tagNumber += 1;
        curWord = "";
        // resets to an empty word for the next tag
      } else curWord += tagText.charAt(i); //we dont want to include the comma
      //potential for locating spaces and removing them if we want in future
    }

    separatedTags[tagNumber] = curWord;

    const data = { Tags: separatedTags, Name: chatName };


    for(var i = 0; i <= tagNumber; i++ ){

      const dataPulled = await fs.collection('tags').doc(separatedTags[i]).get();
      //this is done to update the array as if we simply set new data it overwrites
      var newArr = [];
      if(dataPulled.data()!= null)
      newArr = dataPulled.data().chatList;
      console.log(newArr);

      if(!newArr.includes(chatName)){

        newArr.push(chatName);
        console.log(newArr);
        await fs.collection('tags').doc(separatedTags[i]).set({

          chatList: newArr

        })

      }


      var tempArr = [chatName];
      await fs.collection('tags').doc(chatName).set({
        //this sets the chatname as its
        chatList: tempArr

      })


    }

    const res = await fs.collection("Chats").add(data);
  } else alert("Create new chat canceled!");

  
}

 function BrowseChats()
{

    var [chats, setChats] = useState([]);

    useEffect(() => {
      fs.collection("Chats").onSnapshot((snapshot) =>
        setChats(snapshot.docs.map((doc) => { return {...doc.data(), id: doc.id } }))
      );
  }, []);


    var curChat = "";

    const user = useContext(UserContext);




    return (
      
      <div className="BrowseChats" id="window">

<button className="create" onClick={createNewChat}>
       Create New Chat
      </button>


        <ul className="chatList" id="curList">



        {chats &&
            chats.map((chat) => (
                <ChatItem
                chat= {chat}
                user = {user}
                chatID = {chat.id}
              />
            ))}

        </ul>


   





      </div>




    );

};


export default BrowseChats
