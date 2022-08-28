import React, { useState, useEffect } from 'react';
import { Avatar } from "@mui/material";
import './mainprofile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import LockResetIcon from '@mui/icons-material/LockReset';
import Post from "./Post/Post"
import { useNavigate } from 'react-router-dom';
import EditProfile from '../EditProfile/EditProfile';
import axios from "axios";
import useLoggedInUser from '../../../hooks/useLoggedInUser';


const MainProfile = ({ user }) => {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser] = useLoggedInUser();

  console.log(loggedInUser[0]?.coverImage);

  const username = user?.email?.split('@')[0];
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userpost?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, [user?.email])

  const handleUploadImage = e => {
    setIsLoading(true);
    const image = e.target.files[0];

    const formData = new FormData();
    formData.set('image', image)

    axios.post("https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15", formData)
      .then(res => {
        const url = res.data.data.display_url;
        setImageURL(url);
        // console.log(res.data.data.display_url);
        const userCoverImage = {
          email: user?.email,
          coverImage: url,
        }
        setIsLoading(false)

        if (url) {
          fetch(`http://localhost:5000/userUpdates/${user?.email}`, {
            method: "PATCH",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userCoverImage),
          })
            .then(res => res.json())
            .then(data => {
              console.log('done', data);
            })
        }

      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
        setIsLoading(false);
      })
  }

  return (
    <div>
      <ArrowBackIcon className='arrow-icon' onClick={() => navigate('/')} />
      <h4 className='heading-4'>{username}</h4>
      <div className='mainprofile' >
        {/* <h1 className='heading-1' style={{ color: "white" }}>Building of profile page Tweets </h1> */}
        <div className='profile-bio'>
          {
            <div >
              <div className='coverImageContainer'>
                <img src={loggedInUser[0]?.coverImage ? loggedInUser[0]?.coverImage : 'https://www.proactivechannel.com/Files/BrandImages/Default.jpg'} alt="" className='coverImage' />
                <div className='hoverCoverImage'>
                  <div className="imageIcon_tweetButton">
                    <label htmlFor='image' className="imageIcon">
                      {
                        isLoading ?
                          <LockResetIcon className='photoIcon' />
                          :
                          <CenterFocusWeakIcon className='photoIcon' />
                      }
                    </label>
                    <input
                      type="file"
                      id='image'
                      className="imageInput"
                      onChange={handleUploadImage}
                    />
                    {/* <Button className="tweetBox__tweetButton" type="submit">Tweet</Button> */}
                  </div>
                </div>
              </div>
              <div className='avatar-img'>
                <Avatar src="https://i.ibb.co/0DR7Ndn/twitter-profile.jpg" className="avatar" style={{ width: "20%", height: "20%" }} />
                <div className='userInfo'>
                  <div>
                    <h3 className='heading-3'>{user && user.displayName}</h3>
                    <p className='usernameSection'>@{username}</p>
                  </div>
                  <EditProfile />
                </div>
                <h4 className='tweetsText'>Tweets</h4>
                <hr />
              </div>
              {
                posts.map(p => <Post p={p} />)
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MainProfile;