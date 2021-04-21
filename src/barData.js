import React from "react";
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const barData = [

  {
    name: "Profile",

    image: <PersonIcon/>,

    link: "/placeholderLink2",

    flag: 1,


  },

  {
    name: "Chats",

    image: <ChatIcon/>,

    link: "/placeholderLink3",

    flag: 2,
  },


  {
    name: "Logout",

    image: <MeetingRoomIcon/>,

    link: "placeholderLink4",

    flag: 0,

  }


];
