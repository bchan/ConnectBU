import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


import pic from '../images/image.jpg';

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "rgb(240,240,240)"
  },
  box1: {
    border: "1px solid grey", 
    paddingLeft: 20,
    paddingRight: 20, 
    borderRadius: 5, 
    backgroundColor: "rgb(255,255,255)",
    flex: 10
  },
  box2: {
    flex: 30
  },
  resultBox: {
    border: "1px solid grey", 
    paddingLeft: 20,
    paddingRight: 20, 
    borderRadius: 5, 
    backgroundColor: "rgb(255,255,255)"
  },
  spaceLeft: {flex:8}, spaceMiddle: {flex:1}, spaceRight: {flex:8}, 
  search: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "rgb(255,255,255)",
    width: "100%",
    marginBottom: 20
  }, 
  searchIcon: {
    padding: 5,
    marginLeft: 10,
    height: '100%',
    alignItems: 'center',
    justify: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginLeft: 10
  },


}));

export default function Search()  {
  const classes = useStyles();

  return (

      <div className={classes.screen}>

        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>
        <p style={{'white-space': 'pre-wrap'}}>{"\n"}</p>

        <Grid
          container
          direction="row"
          justify="space-between"
          width="100%">
          
          <Grid className={classes.spaceLeft}> </Grid>

          <Grid className={classes.box1}>
            <p>Filter by</p>
          </Grid>

          <Grid className={classes.spaceMiddle}> </Grid>
          
          <Grid className={classes.box2}>

            <Grid container direction="row" className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}/>
            </Grid>

            <Grid className={classes.resultBox}>
              <h3>Results</h3>
            </Grid>

          </Grid>

          <Grid className={classes.spaceRight}> </Grid>

        </Grid>

      <div style={{height: 100}}></div>

    </div>
  );
}