
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
   
  state={
    progress:0
  }

  setProgress=(progress)=>
  {
    this.setState({progrss:progress})
  }


  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          <Switch>
            <Route key="business" exact path="/business"><News country="in" category='business' /></Route>
            <Route key="general" exact path="/"><News country="in" category='general' /></Route>
            <Route key="entertainment" exact path="/entertainment"><News country="in" category='entertainment' /></Route>
            <Route key="sports" exact path="/sports"><News country="in" category='sports' /></Route>
            <Route key="science" exact path="/science"><News country="in" category='science' /></Route>
            <Route key="technology" exact path="/technology"><News country="in" category='technology' /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
