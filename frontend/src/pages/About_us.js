import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import pic1 from '../images/Hussain.jpg';
import pic2 from '../images/Yousuf.png';
import pic3 from '../images/Ben.jpg';
import pic4 from '../images/Nadim.jpg';
import pic5 from '../images/Damani.jpg';

const useStyles = makeStyles((theme) => ({
  screen: {
    paddingLeft: 50, 
    //backgroundColor: "rgb(240,240,240)"
  },
  boxes: {
    //border: "1px solid grey", 
    padding: 20, 
    width: "80%",
    height: 450,
    width: 200,
    //borderRadius: 1, 
    //backgroundColor: "rgb(255,255,255)", 
    marginBottom: 10,
    marginTop: 10
  },
  image: {
    width: '80%', 
    borderRadius: '80%', 
    marginRight: 30
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
  },
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
}));



export default function Signup()  {
  const classes = useStyles();

  return (


      <div className={classes.screen}>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={50} marginLeft={65}>Meet Our Team</Box>

          </Typography>
        <Grid 
        
        container
        direction="row"
        justify="space-around">

        <Grid 
        
          //container
          //direction="row"
          //justify="flex-start"
          //alignItems="center"
          className={classes.boxes}>
          
          <img src={pic1} alt="Logo" className={classes.image} />
          <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={20}>Hussain Albayat</Box>
            <p>ENG - Electrical Engineering - May 2021</p>
            <p>I like to learn new and hard skills like swimming and biking</p>
            </Typography>
          


        </Grid>


        <Grid
         // container
          direction="row"
          justify="flex-start"
          //alignItems="center"
          
          className={classes.boxes}>
          
          <img src={pic2} alt="Logo" className={classes.image} />
            <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={20}>Yousuf Baker</Box>
            <p>ENG - Electrical Engineering - May 2021</p>
            <p>I can clab with one hand</p>
            </Typography>

        </Grid>



        <Grid
          //container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic3} alt="Hussain" className={classes.image} />

        <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={20}>Benjamin Chan</Box>
            <p>ENG - Computer Engineering - May 2021</p>
            <p>waiting for their input</p>
            </Typography>
        

            </Grid>

        <Grid
          //container
          direction="row"
          justify="flex-end"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic4} alt="Logo" className={classes.image} />

          <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={20}>Nadim El Helou</Box>
            <p>ENG - Computer Engineering - May 2021</p>
            <p>waiting for their input</p>
            </Typography>

        </Grid>

  

        <Grid
          //container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <img src={pic5} alt="Logo" className={classes.image} />

          <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={20}>Damani Philip</Box>
            <p>ENG - Computer Engineering - May 2021</p>
            <p>waiting for their input</p>
            </Typography>
          

        </Grid>
        </Grid>
        </div>
  );
}
