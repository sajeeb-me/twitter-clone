import React from 'react';
import Sidebar from '../pages/Home/Sidebar/Sidebar';
import Widgets from '../pages/Home/Widgets/Widgets';

const Bookmarks = () => {
  return (
    <div className='column'>
      < Sidebar />
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
