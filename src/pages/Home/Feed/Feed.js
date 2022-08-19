import React, { useEffect , useState} from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

function Feed() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
        .then(res => res.json())
        .then(data => {
            setPost(data);
            console.log(data);
        })
    },[])
    return (
        <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox />
        <>
            {
                post.map((p) => (
                    <Post p = {p} key={p._id}/>
                ))
            }
        </>
        </div>

    )

}

export default Feed