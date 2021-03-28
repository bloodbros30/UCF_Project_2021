import React, { useEffect,useState } from "react";
import "./ChatOptions.css";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { fs } from "./fire";


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

  var list = document.getElementById("curList");

  var newChat = document.createElement("li");
  newChat.innerHTML = chatName;
  newChat.classList.add("chatItem");
  list.appendChild(newChat);
}




function ChatOptions({ selectedChat, setSelectedChat }) {



  var curChat = "";

  const user = useContext(UserContext);




  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const chats = await Promise.all(
        user.chats.map(async (chatID) => {
          const chatDoc = await fs.collection("Chats").doc(chatID).get();
          return { ...chatDoc.data(), id: chatID };
        })
      );
      console.log(chats);
      setChats(chats);
    };
    getData();
  }, []);



  return (
    <div className="ChatOptions" id="window">
      <button className="create">
        Showing Your Chats:
      </button>

      <ul className="chatList" id="curList">
        {
          chats.map((chat, key) => (
            <li
              key={key}
              className="chatItem"
              id={selectedChat == chat ? "clicked" : " "}
              onClick={() => {
                setSelectedChat(chat.id);
                document.getElementById("chatNameHere").innerHTML = chat.Name;
                console.log(chat);
              }}
            >
              <div id="text" >

               
                {chat.Name}

              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ChatOptions;
