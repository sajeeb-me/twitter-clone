import React from "react";

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
//import MoreIcon from "@mui/icons-material/More"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';




function Sidebar({handleLogout, user }) {
  const result = user.email.split('@')[0];
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
      <div className="Profile__info">
        <Avatar src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" />
        <div className="user__info"> 
          <h4>{user && user.displayName}</h4>
          <h5>@{result}</h5>
        </div>
        <IconButton><MoreHorizIcon /></IconButton>
        
      </div>
      

    </div>
  );
}

export default Sidebar;