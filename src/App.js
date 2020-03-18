import React from 'react';
import './App.css';
import MenuTabsContainer from './components/containers/MenuTabContainer'

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1 className='App-title'>React Movies App</h1>
      </header>
      <MenuTabsContainer />   
    </div>
  );
}

export default App;
