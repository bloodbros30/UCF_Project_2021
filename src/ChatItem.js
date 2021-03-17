import React, { forwardRef } from "react";
import "./ChatItem.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import {fs} from "./fire";
import firebase from "firebase"

const Post = forwardRef(
  ({ name, Tags, user}, ref) => {

    function test()
    {
        var ref = fs.collection("Users").doc(user.uid);
        ref.update({
           chats: firebase.firestore.FieldValue.arrayUnion(name)
       });
   
    }

    return (
      <div className="post" ref={ref}>
          
         {name}

         <button className="button" onClick={test}>Add Chat</button>

      
      </div>
    );
  }
);

export default Post;
