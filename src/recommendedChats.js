import react from 'react';
import { useContext } from 'react';
import { useRef, useState, useEffect } from "react";
import { UserContext } from "./UserProvider";
import './recommended.css'
import { fs } from "./fire";
import './userList.css'
import ChatItem from "./ChatItem"



var chatList = ["sports"];


function RecommendedChats(){



  return(

    <div className="recommended">

    Chats we recommend for you:

    </div>



  );
}
export default RecommendedChats;
