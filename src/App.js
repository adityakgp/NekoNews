// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App =()=>{
  const apiKey= process.env.REACT_APP_NEWS_API
  const pageSize=12;
  const country='in';
  const [progress, setProgress] = useState(0)
    return (
      <div id='body'>
        <Router> 
        <NavBar/>
        <LoadingBar
        // height='3'
        color='#f11946'
        const progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/"><News setProgress={ setProgress} apiKey={ apiKey} key='general' pageSize={ pageSize} country={ country} category={'general'}/></Route>
          <Route exact path="/business"><News setProgress={ setProgress} apiKey={ apiKey} key='business' pageSize={ pageSize} country={ country} category={'business'}/></Route>
          <Route exact path="/entertainment"><News setProgress={ setProgress} apiKey={ apiKey} key='entertainment' pageSize={ pageSize} country={ country} category={'entertainment'}/></Route>
          <Route exact path="/health"><News setProgress={ setProgress} apiKey={ apiKey} key='health' pageSize={ pageSize} country={ country} category={'health'}/></Route>
          <Route exact path="/science"><News setProgress={ setProgress} apiKey={ apiKey} key='science' pageSize={ pageSize} country={ country} category={'science'}/></Route>
          <Route exact path="/sports"><News setProgress={ setProgress} apiKey={ apiKey} key='sports' pageSize={ pageSize} country={ country} category={'sports'}/></Route>
          <Route exact path="/technology"><News setProgress={ setProgress} apiKey={ apiKey} key='technology' pageSize={ pageSize} country={ country} category={'technology'}/></Route>
          {/* <Route exact path="/search"><News key='search' pageSize={ pageSize} country={ country} category={'anime'}/></Route> */}
        </Switch>
            {/* to change the endpoints we used exact but after changing endpoints the page
                didnt loaded automaticaly, we had to load manually therefore a unique key is added to the route */}
        </Router>
      </div>
    )
  
}

export default App;
