import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
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
    paddingLeft: 30,
    paddingBottom: 30,
    paddingRight: 30,
    borderRadius: 5,
    backgroundColor: "rgb(255,255,255)"
  },
  spaceLeft: { flex: 8 }, spaceMiddle: { flex: 1 }, spaceRight: { flex: 8 },
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
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginLeft: 20,
    minWidth: 400,
  },
  separation: {
    width: "100%",
    height: 0,
    borderTop: "1px solid grey",
    borderColor: "grey",
    marginTop: 15,
    marginBottom: 15
  },
  listItemText: {
    fontSize:'1.3em'
  },
  imageSize: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: 15
  }
}));


export default function Search() {
  const classes = useStyles();
  const [filters, setFilters] = useState({
    class: false,
    labs: false,
    majors: false,
    minors: false,
    year: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const setField = (newData) => {
    let newDictionary = searchQuery;
    for (let key of Object.keys(newData)) {
      newDictionary[key] = newData[key];
    }
    setSearchQuery(newDictionary);
  }

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
    setField({searchFields: filters});
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setField({searchTerm: searchTerm})
  };

  const executeSearch = (callback) => {
    axios.post('http://localhost:5000/search', searchQuery)
      .then((response) => {
        console.log(response);
        return callback(response);
      })
      .catch((response) => {
        // console.log(response);
      })
  };

  return (

    <div className={classes.screen}>

      <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>
      <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>

      <Grid
        container
        direction="row"
        justify="space-between"
        width="100%">

        <Grid className={classes.spaceLeft}> </Grid>

        <Grid className={classes.box1}>
          <p>Filter by</p>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={filters.class} onChange={handleFilterChange} name="checkedClass"/>}
              label="Classes"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.labs} onChange={handleFilterChange} name="checkedLab"/>}
              label="Labs"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.majors} onChange={handleFilterChange} name="checkedMajor"/>}
              label="Major"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.minors} onChange={handleFilterChange} name="checkedMinor"/>}
              label="Minor"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.year} onChange={handleFilterChange} name="checkedYear"/>}
              label="School Year"
            />
          </FormGroup>
        </Grid>

        <Grid className={classes.spaceMiddle}> </Grid>

        <Grid className={classes.box2}>

          <Grid container direction="row" className={classes.search}>
            <InputBase
              placeholder="Search…"
              required
              classes={{ root: classes.inputRoot, input: classes.inputInput, }}
              onChange={(event) => handleSearchChange(event)}
            />
            <IconButton
              type="submit"
              className={classes.searchIcon}
              aria-label="search"
              onClick={() => executeSearch()}
            >
              <SearchIcon />
            </IconButton>
          </Grid>

          <Grid className={classes.resultBox}>
            <h3>Results</h3>
            <Grid className={classes.separation}></Grid>
            {searchResults.map((item) => (
              <ListItem button key={item.name} component={Link} to={"/profile"}>
                <ListItemAvatar>
                  <Avatar src={pic} className={classes.imageSize} />
                </ListItemAvatar>
                <ListItemText classes={{primary:classes.listItemText}} primary={item.name} secondary={item.major} />
              </ListItem>
            ))}
          </Grid>

        </Grid>

        <Grid className={classes.spaceRight}> </Grid>

      </Grid>

      <div style={{ height: 100 }}></div>

    </div>
  );
}
