import './App.css';
import Header from './Pages/Header/Header.js';
import LeftPane from './Pages/LeftPane/LeftPane.js';
import MainPane from './Pages/MainPane/MainPane.js';
import React, {useState, useEffect} from 'react';
import {Routes} from './Constants';


function App() {

  const [route, setRoute] = useState(Routes.DASHBOARD);
  const [simulationList, setSimulationList] = useState(null);

  useEffect(() => {
    const id = setInterval( () => {
      fetch("http://localhost:8000/simulations/").then(response => response.json()).then(data => {
        data = data.map(simulation => {return [simulation.name,simulation.created_at, simulation.id]});
        setSimulationList(data);
    });
  }, 10000);
  return () => clearInterval(id);
}, [])
  
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <LeftPane setRoute={setRoute}/>
        <MainPane route={route} setRoute={setRoute} simulationList={simulationList} setSimulationList={setSimulationList}/>
      </div>
    </div>
  );
}

export default App;
