import './App.css';
import Header from './Pages/Header/Header.js';
import LeftPane from './Pages/LeftPane/LeftPane.js';
import MainPane from './Pages/MainPane/MainPane.js';
import React, {useState} from 'react';
import {Routes} from './Constants';


function App() {
  const [route, setRoute] = useState(Routes.DASHBOARD);

  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <LeftPane setRoute={setRoute}/>
        <MainPane route={route} setRoute={setRoute}/>
      </div>
    </div>
  );
}

export default App;
