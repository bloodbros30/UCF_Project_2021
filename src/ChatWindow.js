import React from "react";
import { useRef, useState } from 'react';
import { auth } from "./fire";
import "./ChatWindow.css";
import firebase from 'firebase';
import "firebase/auth";
import {fs} from './fire.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import RefreshIcon from '@material-ui/icons/Refresh';








function ChatWindow() {
  //const dummy = useRef();

<<<<<<< HEAD


=======
>>>>>>> d34c14cbf88635afef9d4cd71fa41d837de2956f
  const messagesRef = fs.collection('messages');
  var collection;
  var gotMessagesAlready = false;

  //const query = collection.orderBy('sentAt').limit(25);
  //const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');
  const user = firebase.auth().currentUser;
 var used = false;
  var btn = document.getElementById('sendBtn');

  //btn.disabled = formValue == '';
 //console.log(messages[0]); //this is broken



 if(!user) return <></>;
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




  async function fillMessages(){


    console.log(user);
    if(!gotMessagesAlready){
      //do all the shit here

      //get the message from database
      collection = await messagesRef.orderBy('sentAt').limit(25).get();
      if(collection.empty){

        console.log("information not obtained successfully");
      } else{

        var localuid = user.L;

        var list = document.getElementById('chatLog');
        list.innerHTML = '';
        collection.forEach(doc => {
          console.log(doc.id, '=>', doc.data());




              var aMessage = document.createElement('li');
              aMessage.innerHTML = doc.data().messageText

                console.log("got inside first if");
                if(localuid == doc.data().userID){

                    aMessage.classList.add("chatMessageME");
                    console.log(curUserId);

                }
                else{
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
    fillMessages();
    //dummy.current.scrollIntoView({behavior: 'smooth'});
  }


<<<<<<< HEAD





=======
>>>>>>> d34c14cbf88635afef9d4cd71fa41d837de2956f
  return (<>






    <div className = "ChatWindow">

      <div className = "chat-title">
        Sports
      </div>

      <form className="text-form">
        <textarea className='text-input'
          value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message..."
          rows='2'
          placeholder='Type a message...'>
        </textarea>
<<<<<<< HEAD

        <button type="button" id = "sendBtn"

        onClick={sendMessage}


        >
          Send
=======
        <button className= "send-btn" type="button" id = "sendBtn" onClick={sendMessage}>
          Send Message
>>>>>>> d34c14cbf88635afef9d4cd71fa41d837de2956f
        </button>



      </form>
<<<<<<< HEAD

      <div className = "new-message-container" id = "b">
        new msg container
      </div>

      <div className = "search-bar">
        search bar
      </div>
=======
      
>>>>>>> d34c14cbf88635afef9d4cd71fa41d837de2956f

      <div className = "chat-message-list">

        <ul className = "chatHistory" id = "chatLog">






        </ul>



      </div>

    </div>
  </>);
  }

export default ChatWindow;
