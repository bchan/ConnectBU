import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles/App.styles';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import { useSelector } from 'react-redux';
import { selectLoginState } from '../redux/loginSlice';

function App() {
  const classes = useStyles();
  const isLoggedIn = useSelector(selectLoginState);

  return (
    <div className="App">
      <div className="App-banner">
        <p>
          A Fully Connected, Centralized BU.
        </p>
        {
          (!isLoggedIn)?
            <Button className={classes.joinButton} onClick={() => document.getElementById('loginButton').click()}> 
              Join Today 
            </Button>
          :
          <div></div>
        }

      </div>

      <br /><br />

      <Box fontWeight="fontWeightLight" fontSize="h4.fontSize" className={classes.sectionHeader}>
        Connect with Peers and Mentors
      </Box>

      <br />

      <Grid container spacing={2} justify="center" alignItems="stretch" className={classes.container}>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h3>Clubs</h3>
            <p>
              From beekeeping to photography, rocket propulsion to religion, BU has more than 500 student organizations to engage almost any interest. Find and connect with fellow students who share your interests.
            </p>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h3>School, Major, and Classes Taken</h3>
            <p>
              Explore the many classes BU has to offer and reach out to fellow students for tips, help, and academic guidance.
            </p>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h3>Interests</h3>
            <p>
            For those that don’t find what they need in clubs, or prefer a more person to person approach, connectBU allows you to find others to share your interests with! From ham radio operation to theory crafting space stations: you’re bound to find others like you!            </p>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h3>Research</h3>
            <p>
            BU is one of the worlds forefront private research institutions, but navigating through all those labs and their foci can be difficult! ConnectBU allows you to search for labs and connect directly with members for whatever questions you may have!            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          {
            (isLoggedIn)?
              <Button variant="outlined" color="secondary" component={Link} to={"/search"}>
                Search
              </Button>
            :
            <div></div>
          }
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
