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
      <ArrowBackIcon />
      <div>
        <h4>{user.email}</h4>

      </div>

      <div className='mainprofile' style={{ heifht: "100%" }}>
        <h1 style={{ color: "white" }}>Building of profile page Tweets</h1>

        <div>

          <div className='profile-bio'>

            {
              <div >
                <div className='avatar-img'>
                  <Avatar src="https://i.ibb.co/0DR7Ndn/twitter-profile.jpg" style={{ width: "20%", height: "20%" }} />

                  <div className="">
                    <h4>{user && user.displayName}</h4>
                    <h5>@{result}</h5>
                    <button className="Edit-profile-btn" >Edit profile</button>
                  </div>
                </div>

                {
                  posts.map(p => <Post p={p} />)
                }


              </div>

            }



          </div>
        </div>
      </div>
    </diV>
  );
};

export default MainProfile;