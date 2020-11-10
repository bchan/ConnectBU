import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Support from './components/Support';
import HomeLI from './components/Home_LI'
import AboutUs from './components/About_us'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BotBar from './components/BotBar'
import store from './redux/store';
import { Provider } from 'react-redux';

const routing = (
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/search">
          <HomeLI />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </Provider>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
