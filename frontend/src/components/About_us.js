import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

    return (

        <div>
        <p style={{
            'white-space': 'pre-wrap'
            }}>{"\n"}
        </p>
        <p style={{
            'white-space': 'pre-wrap'
            }}>{"\n"}
        </p>

            <Grid item xs={10} sm={5}>
                <div className={classes.paper}>

                 <h2>Who We Are?</h2>

                 </div>
            </Grid>
        </div>
    )
}