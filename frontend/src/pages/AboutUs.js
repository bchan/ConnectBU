import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles/AboutUs.styles';

import HussainPic from '../images/Hussain.jpg';
import YousufPic from '../images/Yousuf.jpg';
import BenPic from '../images/Ben.jpg';
import NadimPic from '../images/Nadim.jpg';
import DamaniPic from '../images/Damani.jpg';

const people = [
  {
    name: 'Hussain Albayat',
    image: HussainPic,
    major: 'Electrical Engineering',
    funFact: '',//'Hussain likes to learn new and hard skills like swimming and biking.'
  },
  {
    name: 'Yousuf Baker',
    image: YousufPic,
    major: 'Electrical Engineering',
    funFact: '',//'Yousuf can clap with one hand.'
  },
  {
    name: 'Benjamin Chan',
    image: BenPic,
    major: 'Computer Engineering',
    funFact: ''
  },
  {
    name: 'Nadim El Helou',
    image: NadimPic,
    major: 'Computer Engineering',
    funFact: ''
  },
  {
    name: 'Damani Philip',
    image: DamaniPic,
    major: 'Computer Engineering',
    funFact: ''
  },

]

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <Grid container justify="center" alignItems="stretch" spacing={5} className={classes.container}>
        <Grid item xs={12} className={classes.header}>
          <Typography component="div" variant="body1">
            <Box color="primary.main" m={3} fontSize={36}>Meet Our Team</Box>
          </Typography>
        </Grid>

        {
          people.map((person) => {
            return (
              <Grid
                key={person.name}
                item
                xs={12} sm={6} md={2}
                className={classes.boxes}
              >
                <img src={person.image} alt="Logo" className={classes.image} />
                <Typography component="div" variant="body1" style={{marginTop: '5px'}}>
                  <Box color="primary.main" fontSize={20}>{person.name}</Box>
                </Typography>
                <p className={classes.major}>{person.major}</p>
                <p className={classes.funFact}>{person.funFact}</p>
              </Grid>
            )
          })
        }

      </Grid>
    </div>
  );
}
