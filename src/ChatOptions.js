import React, { useEffect } from "react";
import "./ChatOptions.css";
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import {fs} from "./fire";

async function CreateNewChat(){


    var chatName = prompt("Enter the name of your chat: ", "your chat name here");

    if(chatName == ""){

      while(chatName == "") chatName = prompt("Enter the name of your chat:(please don't leave empty) ", "your, tags, here, in, this, format");

    }

    var tagText = prompt("Enter a comma separated list of tags for the chat", "tags here");

    if(tagText == ""){

      while(tagText == "") tagText = prompt("Enter a comma separated list of tags for the chat (please don't leave empty) ", "your chat name here");
      //This will ensure that no one enters empty text that messes up the firebase
    }


    var currentChat = ""; //this should be filled with a default chat that is saved for the user in future



    var separatedTags = [];
    var tagNumber  = 0;
    var curWord = "";
    if(tagText != null && chatName!=null){
      for( var i = 0; i < tagText.length; i++){


        //put tags into an array
        if(tagText.charAt(i) == ','){
          //tags are in comma separated list, so words end at commas

          separatedTags[tagNumber] = curWord;
          tagNumber+=1;
          curWord = "";
          //resets to an empty word for the next tag

        } else curWord += tagText.charAt(i); //we dont want to include the comma
        //potential for locating spaces and removing them if we want in future
      }

      separatedTags[tagNumber] = curWord;

      const data={


        Tags: separatedTags


      }

      const res = await fs.collection('Chats').doc(chatName).set(data);
    } else alert("Create new chat canceled!");





  }


 function ChatOptions() {

  const user = useContext(UserContext);

  console.log(user);
  return (


    <div className="ChatOptions">


    <button  onClick={CreateNewChat}>

    New Chat


    </button>


    Name:{user.name}

    
    
    List of Chats:{user.chats} 

    </div>

  );
}

export default ChatOptions;
