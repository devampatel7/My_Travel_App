import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './views/Navbar'
import Home from './views/Home'
import Search from './views/SearchViews/Search'
import Footer from './views/Footer'

ReactDOM.render(
  <div className='App1'>
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Search' component={Search}/>
    </Switch>
    <Footer/>
  </Router>
  </div>,
  document.getElementById('root')
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
