import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
    const [post, setPost] = useState('')

    const handleTweet = () => {
        const userPost = {
            post: post,
            photo: '',
            username: 'shuvo',
            name: "Sajeeb Das Shuvo"
        }
        fetch('http://localhost:5000/post', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userPost),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost('')
            })

    }

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" />
                <input placeholder="What's happening?" type="text" onChange={(e) => setPost(e.target.value)} />

            </div>
            <input className="tweetBox__imageInput"
                placeholder="Enter Image URL"
                type="text" />
            <Button className="tweetBox__tweetButton" onClick={handleTweet}>Tweet</Button>
        </form>

    </div>
}
export default TweetBox;