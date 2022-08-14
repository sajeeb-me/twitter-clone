import React from "react";
import "./TweetBox.css";
import {Avatar , Button } from "@mui/material";

function TweetBox(){
    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" />
                <input placeholder="What's happening?" type = "text"/>
                

            </div>
            <input className="tweetBox__imageInput"
                placeholder="Enter Image URL"
                type="text"/>
            <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>

    </div>
}
export default TweetBox;