// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API
  pageSize=12;
  country='in';
  state={
      progress :0
  }
  setProgress=(progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div id='body'>
        <Router>
        <NavBar/>
        <LoadingBar
        // height='3'
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country={this.country} category={'general'}/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country={this.country} category={'business'}/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country={this.country} category={'entertainment'}/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country={this.country} category={'health'}/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country={this.country} category={'science'}/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country={this.country} category={'sports'}/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country={this.country} category={'technology'}/></Route>
          {/* <Route exact path="/search"><News key='search' pageSize={this.pageSize} country={this.country} category={'anime'}/></Route> */}
        </Switch>
            {/* to change the endpoints we used exact but after changing endpoints the page
                didnt loaded automaticaly, we had to load manually therefore a unique key is added to the route */}
        </Router>
      </div>
    )
  }
}

