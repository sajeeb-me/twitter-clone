import React from 'react';
import Sidebar from '../pages/Home/Sidebar/Sidebar';
import Widgets from '../pages/Home/Widgets/Widgets';
import './allroutes.css';

const Bookmarks = () => {
  return (
    <div className='column'>
      < Sidebar className="sidebar" />
      <div>
        <h1 style={{ color: "skyblue" }}>BookMarks page</h1>
      </div>
      <div className='colunm-2'>

        <Widgets />

      </div>

    </div>
  );
}

export default Bookmarks;
