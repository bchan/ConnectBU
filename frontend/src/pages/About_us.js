import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import pic1 from '../images/Hussain.jpg';
import pic2 from '../images/Yousuf.jpg';
import pic3 from '../images/Ben.jpg';
import pic4 from '../images/Nadim.jpg';
import pic5 from '../images/Damani.jpg';

const useStyles = makeStyles((theme) => ({
  screen: {
    paddingLeft: 50, 
    backgroundColor: "rgb(240,240,240)"
  },
  boxes: {
    border: "1px solid grey", 
    padding: 30, 
    width: "70%",
    borderRadius: 10, 
    backgroundColor: "rgb(255,255,255)", 
    marginBottom: 10,
    marginTop: 10
  },
  image: {
    width: '20%', 
    borderRadius: '80%', 
    marginRight: 50
  }, 
  separation: {
    width: "100%", 
    height: 0, 
    borderTop: "1px solid grey", 
    borderColor: "grey", 
    marginTop: 10, 
    marginBottom: 20
  },
  editButton: {
    backgroundColor: '#EB5757',
    color: 'white',
    '&:hover': {
      backgroundColor: '#B03E3E',
      color: 'white'
    },
    marginLeft: 10
  }
}));


export default function Signup()  {
  const classes = useStyles();

  return (

      <div className={classes.screen}>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic1} alt="Logo" className={classes.image} />
          <Grid justify="flex-start">
            <h1>Hussain Albayat</h1>
            <p>ENG - Electrical Engineering - May 2021</p>
            <p>I like to learn new and hard skills like swimming and biking</p>
          </Grid>

        </Grid>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic2} alt="Logo" className={classes.image} />
          <Grid justify="flex-start">
            <h1>Yousuf Baker</h1>
            <p>ENG - Electrical Engineering - May 2021</p>
            <p>I can clab with one hand</p>
          </Grid>

        </Grid>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic3} alt="Hussain" className={classes.image} />
          <Grid justify="flex-start">
            <h1>Benjamin Chan</h1>
            <p>ENG - Computer Engineering - May 2021</p>
            <p>I like to learn new and hard skills like swimming and biking</p>
          </Grid>

        </Grid>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic4} alt="Logo" className={classes.image} />
          <Grid justify="flex-start">
            <h1>Nadim El Helou</h1>
            <p>ENG - Computer Engineering - May 2021</p>
            <p>waiting for their input</p>
          </Grid>

        </Grid>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic5} alt="Logo" className={classes.image} />
          <Grid justify="flex-start">
            <h1>Damani Philip</h1>
            <p>ENG - Computer Engineering - May 2021</p>
            <p>waiting for their input</p>
          </Grid>

        </Grid>
        </div>
  );
}
