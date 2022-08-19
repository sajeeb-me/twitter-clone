import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
    const [post, setPost] = useState('')
    const [url, setUrl] = useState('')

    const handleTweet = () => {
        const userPost = {
            post: post,
            photo: url,
            username: 'elonmusk',
            name: "Elon Musk"
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
            })

    }

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" />
                <input placeholder="What's happening?" type="text" onChange={(e) => setPost(e.target.value)} />

            </div>
            <input className="tweetBox__imageInput"
                placeholder="Enter Image URL"
                onChange={(e) => setUrl(e.target.value)}
                type="text" />
            <Button className="tweetBox__tweetButton" onClick={handleTweet}>Tweet</Button>
        </form>

    </div>
}
export default TweetBox;