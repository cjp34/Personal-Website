import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Contact from './containers/Contact'

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
          <Route path='/contact/' render={() => <Contact/> }/>
        </Switch>
      </Router>
          
    </div>
    );
  }
}


export default App;
