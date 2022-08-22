import React from 'react'
import './app.css';
import Sidebar from '../pages/Home/Sidebar/Sidebar';

import Widgets from '../pages/Home/Widgets/Widgets';

const Explore = () => {
  return (
    <div className='column'>
      < Sidebar className="sidebar" />
      <div>
        <h1 style={{ color: "skyblue" }}>Explore page</h1>
      </div>
      <div className='colunm-2'>

        <Widgets />

      </div>

    </div>
  );
}

export default Explore;
