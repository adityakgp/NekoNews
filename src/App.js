// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {
  pageSize=12;
  render() {
    return (
      <div id='body'>
        <Router>
        <NavBar/>

        <Switch>
          <Route exact path="/"><News key='general' pageSize={this.pageSize} country={'in'} category={'general'}/></Route>
          <Route exact path="/business"><News key='business' pageSize={this.pageSize} country={'in'} category={'business'}/></Route>
          <Route exact path="/entertainment"><News key='entertainment' pageSize={this.pageSize} country={'in'} category={'entertainment'}/></Route>
          <Route exact path="/health"><News key='health' pageSize={this.pageSize} country={'in'} category={'health'}/></Route>
          <Route exact path="/science"><News key='science' pageSize={this.pageSize} country={'in'} category={'science'}/></Route>
          <Route exact path="/sports"><News key='sports' pageSize={this.pageSize} country={'in'} category={'sports'}/></Route>
          <Route exact path="/technology"><News key='technology' pageSize={this.pageSize} country={'in'} category={'technology'}/></Route>
          {/* <Route exact path="/search"><News key='search' pageSize={this.pageSize} country={'in'} category={'anime'}/></Route> */}
        </Switch>
            {/* to change the endpoints we used exact but after changing endpoints the page
                didnt loaded automaticaly, we had to load manually therefore a unique key is added to the route */}
        </Router>
      </div>
    )
  }
}

