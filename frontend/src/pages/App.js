import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles/App.styles';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="App-banner">
        <p>
          A Fully Connected, Centralized BU.
        </p>
        <Button className={classes.joinButton} component={Link} to={"/signup"}> 
          Join Today 
        </Button>
      </div>

      <br /><br />

      <Box fontWeight="fontWeightLight" fontSize="h4.fontSize" className={classes.sectionHeader}>
        Connect with Peers and Mentors
      </Box>

      <br />

      <Grid container spacing={2} justify="center" alignItems="stretch" className={classes.container}>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h2>Clubs</h2>
            <p>
              From beekeeping to photography, rocket propulsion to religion, BU has more than 500 student organizations to engage almost any interest. Find and connect with fellow students who share your interests.
            </p>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h2>School, Major, and Classes Taken</h2>
            <p>
              Explore the many classes BU has to offer and reach out to fellow students for tips, help, and academic guidance.
            </p>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h2>Interests</h2>
            <p>
              Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </p>
          </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h2>Research</h2>
            <p>
              Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="outlined" color="secondary" component={Link} to={"/search"}>
            Search
          </Button>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
