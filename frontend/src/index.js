import React, { useEffect, useState } from 'react';
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
import Chat from './pages/Chat';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BotBar from './components/BotBar'
import store from './redux/store';
import { Provider } from 'react-redux';
import { login, logout } from './redux/loginSlice';
import axios from 'axios';

import Fade from '@material-ui/core/Fade';
import Loading from './components/Loading';

// Custom hook, acts like constructor
const useConstructor = (callBack = () => { }) => {
  const [hasCalled, setCalled] = useState(false);
  if (hasCalled) return;
  callBack();
  setCalled(true);
}

function Index() {
  // Handles loading
  const [isLoading, setLoading] = useState(true);

  useConstructor(() => {
    axios.get('/api/login')
      .then((res) => {
        if (res.status === 200) {
          store.dispatch(login(res.data))
        }

        setTimeout(() => {
          setLoading(false);
        }, 1000);

      })
      .catch((error) => {
        store.dispatch(logout());

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
  })

  return (
    <div>
      {(isLoading) ?
        <Fade in={isLoading}>
          <div><Loading message="" /></div>
        </Fade>
        :
        <Provider store={store}>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Fade in={!isLoading}>
                  <div><App /></div>
                </Fade>
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
              <Route path="/chat">
                <Chat />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </Provider>
      }
    </div>
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
