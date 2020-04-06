import React from 'react';
import logo from './logo.svg';
import './App.css';
import VerticalPanel from './components/vertical-panel';
import VerticalGroup from './components/vertical-group';
import DonutChart from './components/DonutChart1'

function App() {
  return (
    <div className="App">
      
    
      <header className="App-header">
        <VerticalGroup data-abc="def">
    <VerticalPanel title="abc">HEllo</VerticalPanel>
    <VerticalPanel title="abc">HEllo</VerticalPanel>
    <VerticalPanel title="abc">HEllo</VerticalPanel>
    <VerticalPanel title="abc">HEllo</VerticalPanel>
    <VerticalPanel title="abc">HEllo</VerticalPanel>
    <VerticalPanel title="abc">HElloDE
    <DonutChart></DonutChart></VerticalPanel>
    </VerticalGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
