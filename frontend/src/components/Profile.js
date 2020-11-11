import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import pic from '../images/image.jpg';

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
    borderRadius: '50%', 
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
          
          <img src={pic} alt="Logo" className={classes.image} />
          <Grid justify="flex-start">
            <h1>Artoo the Terrier</h1>
            <p>CAS - Human Anthropology - May 2021</p>
            <p>Specialization: T.L.</p>
          </Grid>

        </Grid>

        <Button className={classes.editButton} component={Link}>
          Edit Profile
        </Button>


        <Grid
          container
          alignItems="center"
          justify="flex-start"
          className={classes.boxes}>
          
          <Grid>
            <h2 style={{marginTop: 0}}>About</h2>
            <p>I'm the new Rhett, get used to it</p>
          </Grid>

        </Grid>


        <Grid
          container
          direction="column"
          className={classes.boxes}>
          
          <Grid>
            <h2 style={{marginTop: 0}}>Extra-Curriculars</h2>
            <p>Walking, sniffing, peeing</p>
          </Grid>

          <Grid className={classes.separation}></Grid>

          <Grid>
            <h2 style={{marginTop: 0}}>Labs</h2>
            <p>None</p>
          </Grid>

          <Grid className={classes.separation}></Grid>

          <Grid>
            <h2 style={{marginTop: 0}}>On Campus Job</h2>
            <p>Being petted</p>
          </Grid>

        </Grid>


        <Grid
          container
          alignItems="center"
          justify="flex-start"
          className={classes.boxes}>
          
          <Grid>
            <h2 style={{marginTop: 0}}>Classes</h2>
            <p>I don't do classes. Okay?</p>
          </Grid>

        </Grid>
      
      <div style={{height: 100}}></div>

    </div>
  );
}