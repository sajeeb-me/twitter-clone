import React from "react";
import { useSelector } from "react-redux";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";
import PostList from "./PostList";

function Feed() {
    const postList = useSelector(state => state.postReducer)
    return (
        <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox />
        <div>
            {
                postList.data === null ?
                <h1>Loading...</h1> :
                <>
                    <PostList postList = {postList.data} />
                </>
            }
        </div>
        </div>
    )
}
export default Feed



    
