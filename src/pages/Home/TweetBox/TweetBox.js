import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import axios from "axios";

function TweetBox() {
    const [post, setPost] = useState('')
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleUploadImage = e => {
        setIsLoading(true);
        const image = e.target.files[0];

        const formData = new FormData();
        formData.set('image', image)

        axios.post("https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15", formData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                // console.log(res.data.data.display_url);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleTweet = () => {
        const userPost = {
            post: post,
            photo: imageURL,
            username: 'elonmusk',
            name: "Elon Musk"
        }
        console.log(userPost);
        fetch('https://pacific-peak-30751.herokuapp.com/post', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userPost),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://i.ibb.co/0DR7Ndn/twitter-profile.jpg" />
                <input placeholder="What's happening?" type="text" onChange={(e) => setPost(e.target.value)} />

            </div>
            <div className="imageIcon_tweetButton">
                <label htmlFor='image' className="imageIcon">
                    {
                        isLoading ? <p>Uploading Image</p> : <p>{imageURL ? 'Image Uploaded' : <AddPhotoAlternateOutlinedIcon />}</p>
                    }
                </label>
                <input
                    type="file"
                    id='image'
                    className="imageInput"
                    onChange={handleUploadImage}
                    required
                />
                {/* <input className="tweetBox__imageInput"
                placeholder="Enter Image URL"
                onChange={(e) => setUrl(e.target.value)}
                type="text" /> */}
                <Button className="tweetBox__tweetButton" onClick={handleTweet}>Tweet</Button>
            </div>
        </form>

    </div>
}
export default TweetBox;