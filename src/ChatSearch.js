import react from 'react';
import { useContext } from 'react';
import { useRef, useState, useEffect } from "react";
import { UserContext } from "./UserProvider";
import './ChatSearch.css'
import { fs } from "./fire";
import './userList.css'
import ChatItem from "./ChatItem"



var chatList = ["sports"];


function ChatSearch()
{


  const dummy = useRef();
  const user = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const [formValue, setFormValue] = useState("");


 var query = fs.collection('Chats');
  useEffect(() => {
    query.onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((doc) => { return {...doc.data(), id: doc.id } }))
    );
  }, []);


  async function doSearch(e){
    e.preventDefault();
    if (!formValue) return;
    console.log(formValue);



    const tagData = await fs.collection('tags').doc(formValue).get();

    if (tagData.data() != null){


      chatList = tagData.data().chatList;
      console.log(chatList);
    } else console.log("no relevant chats found"); //put something useful here

    //const data = await fs.collection('tags').doc()
    setFormValue("");
    query = fs.collection('Chats').where('Name', 'in', chatList);
    const test = await query.get();
    test.forEach(doc =>{

      console.log(doc.data());

    })
    query.onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((doc) => { return {...doc.data(), id: doc.id } }))
    );

  }


  return(


    <div className="ChatSearchWindow">

    <form className="text-form">
      <textarea
        className="text-input"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="Type a message..."
        rows="2"
        placeholder="Type a message..."
        onKeyPress={(e) => {
          if (e.key === "Enter") doSearch(e);
        }}
      ></textarea>

      </form>


      <div>


        <ul className="searchedChatList">


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


    </div>


  );

}


export default ChatSearch
