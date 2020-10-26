import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/App.css';

const useStyles = makeStyles((theme) => ({
  joinButton: {
    backgroundColor: '#EB5757',
    color: 'white',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="App-banner">
        <p>
          A Fully Connected, Centralized BU.
        </p>
        <Button className={classes.joinButton}>
          Join Today
        </Button>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;
