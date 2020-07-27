import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Contact from './containers/Contact'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Skills from './containers/Skills'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
    <div className="App">
      <Router>
          <Navbar/>
        <Switch>
          <Route path='/about/' render={() => <About/> }/>
          <Route path='/contact/' render={() => <Contact/> }/>
          <Route path='/portfolio/' render={() => <Portfolio/>}/>
          <Route path='/skills/' render={() => <Skills/>}/>
        </Switch>
      </Router>
          
    </div>
    );
  }
}


export default App;
