import React from 'react';
import './App.css';

import Card from './card';
import Navbar from './navBar';
import SideBar from './sideBar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <div className='appContent'>
        <SideBar/>
        <div className='deck-section'>
          <Card/>
        </div>
      </div>

    </div>
  );
}

export default App;
