import React from "react";
//import {Link} from 'react-router-dom'
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import { Avatar } from '@mui/material';



function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      {/* <div className="user">
      <Avatar className="avatar" borderRadius = "50%">E</Avatar>
      <div className="username">Ekta Gupta <SidebarOptions Icon={MoreHorizIcon}/></div> */}
      <div className="tweetBox__input">
                <Avatar src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" />
                {/* <input placeholder="What's happening?" type = "text"/> */}
                <h3>Shinchan</h3>
                <SidebarOptions Icon={MoreHorizIcon} />
      </div>
   
    </div>
  );
}

export default Sidebar;