import React from "react";
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

export const barData = [
  {
    name: "Friends",

    image: <PeopleIcon/>,

    link: "/placeholderLink1",
  },

  {
    name: "Profile",

    image: <PersonIcon/>,

    link: "/placeholderLink2",
  },

  {
    name: "Chats",

    image: <ChatIcon/>,

    link: "/placeholderLink3",
  },

  {
    name: "Settings",

    image: <SettingsIcon/>,

    link: "placeholderLink4",
  }
];
