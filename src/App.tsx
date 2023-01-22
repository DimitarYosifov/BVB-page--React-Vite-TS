import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Players from './About';
import Trophies from './Trophies';
import History from './History';

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (

      <div id='main-app-container'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/trophies" element={<Trophies />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    );
  }
}

export default App
