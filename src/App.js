import React from 'react'
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    //BEM class-naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}
      <SwipeButtons />

    </div>
  );
}

export default App;

/* 3 sections of the app - header , tinder card and swipe button section */

/* https://tinder-clone-cdffb.web.app/ */
