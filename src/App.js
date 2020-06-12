import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
    <div className="App">
          <Navbar/>
    </div>
    );
  }
}


export default App;
