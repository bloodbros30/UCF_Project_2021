import React, { useEffect } from "react";
import "./ChatOptions.css";
import { useContext } from 'react';
import { UserContext } from "./UserProvider";
import {fs} from "./fire";

async function CreateNewChat(){


    var chatName = prompt("Enter the name of your chat: ", "your chat name here");

    var tagText = prompt("Enter a comma separated list of tags for the chat", "tags here");



    var separatedTags = [];
    var tagNumber  = 0;
    var curWord = "";

    for( var i = 0; i < tagText.length; i++){


      //put tags into an array
      if(tagText.charAt(i) == ','){

        separatedTags[tagNumber] = curWord;
        tagNumber+=1;
        curWord = "";


      } else curWord += tagText.charAt(i); //we dont want to include the comma

    }

    separatedTags[tagNumber] = curWord;

    const data={


      Tags: separatedTags


    }

    const res = await fs.collection('Chats').doc(chatName).set(data);


  }


 function ChatOptions() {

  const user = useContext(UserContext);

  console.log(user);
  return (


    <div className="ChatOptions">


    <button  onClick={CreateNewChat}>

    New Chat


    </button>

    {user.Name}

    </div>

  );
}

export default ChatOptions;
