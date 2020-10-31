import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BotBar from './components/BotBar'

const routing = (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/">
        <App />
      </Route>
    </Switch>
    <Footer />
  </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
