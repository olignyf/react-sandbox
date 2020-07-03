import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import VerticalPanel from './components/vertical-panel';
import VerticalGroup from './components/vertical-group';
import DonutChart from './components/DonutChart1'
import { RenderTest } from './components/render-test'
import { controller } from 'api/requests';
import { Person } from 'models/person';

function App() {

  let person:Person = {name:'abc'};
  
  useEffect(() => {
    console.log('load');
    controller.get('/api/v1/employee/6').then((response) => {
      console.log('response', response);
      person = {id:4, name:'Frank'};
    })
  }, []);

  const onSavePerson = (person: Person) => {
    controller.put('/api/v1/employee/'+person.id, person);
  };
  
  return (
    <div className="App">         
      <header className="App-header">
        <VerticalGroup data-abc="def">
          <VerticalPanel title="abc">HEllo</VerticalPanel>
          <VerticalPanel title="abc">HEllo</VerticalPanel>
          <VerticalPanel title="abc">HEllo</VerticalPanel>
          <VerticalPanel title="abc">HEllo</VerticalPanel>
          <VerticalPanel title="abc">HEllo
            <div className="parent">
              <div className="ellipsis">long text that will overflow one one line </div>
            </div>
          </VerticalPanel>
          <VerticalPanel title="abc">HElloDE
            <DonutChart></DonutChart>
          </VerticalPanel>
        </VerticalGroup>

        <hr/>

        <RenderTest data={person} onSave={onSavePerson}></RenderTest>
        
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
