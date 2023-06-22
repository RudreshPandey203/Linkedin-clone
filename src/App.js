import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className='app'>
      {/* /* Header */ }
          <Header />
      {/* App Body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
