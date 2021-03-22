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
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ChatItem({ chat, user,chatID }) {
  function test() {
    var ref = fs.collection("Users").doc(user.uid);
    ref.update({
      chats: firebase.firestore.FieldValue.arrayUnion(chatID),
    });
  }

  return (



    <Card bg="danger" border="dark" style={{ width: '18rem' }}>
    <Card.Header>{chat.Name}</Card.Header>
    <Card.Body>
      <Card.Title>Members: mem num go here</Card.Title>
      <Card.Text>
        could add additional chat description here
      </Card.Text>

      <Button  variant="dark"  onClick={test}>Add Chat</Button>

    </Card.Body>
  </Card>
  );
}

export default ChatItem;
