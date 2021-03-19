import React, { forwardRef } from "react";
import "./ChatItem.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { fs } from "./fire";
import firebase from "firebase";

function ChatItem({ chat, user }) {
  function test() {
    var ref = fs.collection("Users").doc(user.uid);
    ref.update({
      chats: firebase.firestore.FieldValue.arrayUnion(chat),
    });
  }

  return (
    <div className="post">
      {chat.Name}

      <button className="button" onClick={test}>
        Add Chat
      </button>
    </div>
  );
}

export default ChatItem;
