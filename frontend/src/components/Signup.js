/*import React,{useState} from 'react';
import BackgroundImage from '../images/halloween.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useStyles } from '../styles/App.styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(20),
    marginBottom: theme.spacing(10),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));
export default function Signup()  {
    const classes = useStyles();
    const [Major, setMajor] = React.useState('');
  
    const handleChange = (event) => {
      setMajor(event.target.value);
    };

    return (
        
        <div>
            <p style={{
                'white-space': 'pre-wrap'
             }}>{"\n"}</p>
           
            <Grid item xs={100} sm={50}>
          <div className={classes.paper}>
            <h2>Minor</h2>

          </div>
            </Grid>
            <Grid item xs={10} sm={50}>
          <div className={classes.paper}>
            <h2>Age</h2>

          </div>
            </Grid>
            <Grid item xs={10} sm={5}>
          <div className={classes.paper}>
            <h2>Major</h2>

          </div>
            </Grid>
        <FormControl className={classes.formControl}>
        
          <InputLabel id="major">Major</InputLabel>
          
          <Select
            labelId="major"
            id="major"
            value={Major}
            onChange={handleChange}
            
          >
            <MenuItem value={"Electrical Engineering"}>Electrical Engineering</MenuItem>
            <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
            <MenuItem value={"Computer Engineering"}>Computer Engineering</MenuItem>
            
          </Select>
        </FormControl>

        
      </div>
    );
  }