import React, { useState, useEffect } from 'react';
import { Avatar } from "@mui/material";
import './mainprofile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Post from "./Post/Post"
const MainProfile = ({ p, user }) => {
const result = user?.email?.split('@')[0];
const [posts, setPosts] = useState([]);
useEffect(() => {
    fetch(`http://localhost:5000/userpost?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, [posts])

  return (
    <diV>
      <ArrowBackIcon  className='arrow-icon' />
      <h4>{result}</h4>
      <div className='mainprofile' >
        <h1 style={{ color: "white" }}>Building of profile page Tweets </h1>
        <div className='profile-bio'>
          {
            <div >
              <div className='avatar-img'>
                <Avatar src="https://i.ibb.co/0DR7Ndn/twitter-profile.jpg" className="avatar"style={{ width: "20%", height: "20%" }} />                
                <h3 style={{fontSize:"22px"}}>{result}</h3>
                <h5 style={{fontSize:"22px"}}>{user.email}</h5>
                <button className="Edit-profile-btn" >Edit profile</button>
              </div>
              {
                posts.map(p => <Post p={p} />)
              }
            </div>
          }
        </div>
      </div>
    </diV>
  );
};

export default MainProfile;