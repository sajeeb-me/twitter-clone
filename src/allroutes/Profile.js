import React from 'react';
import Sidebar from '../pages/Home/Sidebar/Sidebar';
import Widgets from '../pages/Home/Widgets/Widgets';

const Profile = () => {
  return (
    <div className='column'>
    < Sidebar />
    <div>
      <h1 style={{ color: "skyblue" }}>Profile page</h1>
    </div>
    <div className='colunm-2'>

      <Widgets />

    </div>

  </div>
  );
}

export default Profile;
