import React, { useState } from "react";
import "./TweetBox.css";

import {Avatar , Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import {createPost} from '../../../actions/post'

function TweetBox(){
    const[post__headerDescription, setPost__headerDescription] = useState('')
    const[post__image, setPost__image] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(createPost({post__headerDescription, post__image,userPosted: User.result.name}, navigate))
    }

    // const handleEnter = (e) => {
    //     if(e.key === 'Enter'){
    //         setQuestionBody(questionBody + "\n")
    //     }
    // }
    return <div className="tweetBox">
        <form onSubmit={handleSubmit}>
            <div className="tweetBox__input">
                <Avatar src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" />
                <input placeholder="What's happening?" type = "text" onChange={(e) => {setPost__headerDescription(e.target.value)}}/>
                

            </div>
            <input className="tweetBox__imageInput"
                placeholder="Enter Image URL"
                type="text" onChange={(e) => {setPost__image(e.target.value)}}/>
            <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>

    </div>
}
export default TweetBox;