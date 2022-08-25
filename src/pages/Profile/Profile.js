import React from 'react'
import '../pages.css'
import EditProfile from './EditProfile/EditProfile'
import MainProfile from './MainProfile/MainProfile'

function Profile() {
    return (
        <div className='profilePage'>
            <MainProfile />
            <EditProfile />
        </div>
    )
}

export default Profile