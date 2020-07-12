import React from 'react';
import './App.css';

// import Card from './card';
import DeckDisplay from './deckDisplay';
import Navbar from './navBar';
import SideBar from './sideBar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <div className='appContent'>
        <SideBar/>
        <div className='deck-section'>
          <DeckDisplay/>
        </div>
      </div>

    </div>
  );
}

export default App;
