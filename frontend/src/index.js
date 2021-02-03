import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Support from './pages/Support';
import HomeLI from './pages/Home_LI'
import Search from './pages/Search'
import AboutUs from './pages/AboutUs'
import SignUp from './pages/SignUp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BotBar from './components/BotBar'
import store from './redux/store';
import { Provider } from 'react-redux';
import { login, logout } from './redux/loginSlice';
import axios from 'axios';

function Index() {
  useEffect(() => {
    console.log('hello');
    axios.get('http://localhost:5000/api/login')
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        store.dispatch(login())
      }
    })
    .catch((error) => {
      console.log(error);
      store.dispatch(logout())
    })
  })

  return (
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
          <SignUp />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/recommendations">
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
  )
  
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
