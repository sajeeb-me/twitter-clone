import React from "react";
import "./Feed.css";
import TweetBox from "../../src/TweetBox/TweetBox.js";
import Post from "../../src/Post/Post.js"

function Feed() {
    return (
        <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>

    )

}

export default Feed