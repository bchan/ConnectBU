import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
    searchButton: {
      backgroundColor: '#EB5757',
      color: 'white',
      '&:hover': {
        backgroundColor: '#B03E3E',
        color: 'white'
      },
      marginLeft: 10
    },
    list: {
        flexGrow: 1
      }
  }));

export default function Home_LI() {
    
  const classes = useStyles();
  return(
        <div className={classes.screen}>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <Grid justify="flex-start">
            <h1>Classes That Might Interest You!</h1>
            <List className={classes.list} subheader={<li />}>
            {[447, 503].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader color = 'inherit'>{`EC ${sectionId}`}</ListSubheader>
                {['—Hussain', '—Damani'].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`} alignItems = 'center'>
                    <ListItemText primary={`${item}`}/>
                </ListItem>
                ))}
            </ul>
            </li>
        ))}
        </List>
        <Button className={classes.searchButton} component={Link}>
          See More
        </Button>
          </Grid>

        </Grid>




        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <Grid justify="flex-start">
            <h1>Clubs That Might Interest You!</h1>
            <List className={classes.root} subheader={<li />} justfy='flex-start'>
            {['Bee Keeping', 'Fighting Against Multiple Sclerosis'].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader color = 'inherit'>{`${sectionId}`}</ListSubheader>
                {['—Hussain', '—Damani'].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${item}`} />
                </ListItem>
                ))}
            </ul>
            </li>
        ))}
        </List>
        <Button className={classes.searchButton} component={Link}>
          See More
        </Button>
          </Grid>

        </Grid>



        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className={classes.boxes}>
          
          <Grid justify="flex-start">
            <h1>Labs That Might Interest You!</h1>
            <List className={classes.root} subheader={<li />} justfy='flex-start'>
            {['Kinsey Group', 'CSM'].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListSubheader color = 'inherit'>{`${sectionId}`}</ListSubheader>
                {['—Hussain', '—Damani'].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${item}`} />
                </ListItem>
                ))}
            </ul>
            </li>
        ))}
        </List>
        <Button className={classes.searchButton} component={Link}>
          See More
        </Button>
          </Grid>

        </Grid>

      
      <div style={{height: 100}}></div>

    </div>
    )
}


