import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Support from './pages/Support';
import HomeLI from './pages/Home_LI'
import AboutUs from './pages/About_us'
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
