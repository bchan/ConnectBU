import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { countries, Major, Minor, Club, Research } from './Lists';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
  },
  autoComplete: {
    width: '100%',
  }
}));

export default function EditDialog(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="lg"
    >
      <DialogTitle id="scroll-dialog-title">Edit Profile</DialogTitle>
      <DialogContent dividers={true}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justify="center"
          spacing={1}
        >
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                className={classes.textField}
              // onChange={(event) => updateFirstName(event)}
              // value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                className={classes.textField}
              // onChange={(event) => updateLastName(event)}
              // value={lastName}
              />
            </Grid>

          </Grid>

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                id="countryBox"
                className={classes.autoComplete}
                options={countries}
                getOptionLabel={(option) => option.title}
                // getOptionSelected={(option) => option.title === country}
                // onChange={(event) => updateCountry(event)}
                // value={(country === '') ? null : { title: country }}
                renderInput={
                  (params) => <TextField
                    {...params}
                    label="Where Are You From?"
                    // className={classes.textField}
                    variant="outlined"
                  />
                }
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                id="majorBox"
                multiple
                className={classes.autoComplete}
                options={Major}
                getOptionLabel={(option) => option.title}
                // getOptionSelected={(option) => major.map((element) => { return element.title }).includes(option.title)}
                // onChange={(event, newValue) => updateMajor(event, newValue)}
                // value={major}
                filterSelectedOptions
                renderInput={
                  (params) => <TextField
                    {...params}
                    label="What's your major?"
                    // margin="normal"
                    variant="outlined"
                  />
                }
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="minorBox"
                className={classes.autoComplete}
                options={Minor}
                getOptionLabel={(option) => option.title}
                // getOptionSelected={(option) => minor.map((element) => { return element.title }).includes(option.title)}
                // onChange={(event, newValue) => updateMinor(event, newValue)}
                // value={minor}
                filterSelectedOptions
                renderInput={
                  (params) => <TextField
                    {...params}
                    label="What's your minor?"
                    // margin="normal"
                    variant="outlined"
                  />
                }
              />
            </Grid>
          </Grid>


          {/* <Grid item xs={12} className={classes.element}>
              <Autocomplete
                multiple
                id="classBox"
                className={classes.autoComplete}
                // options={class_list.current}
                getOptionLabel={(option) => option}
                // getOptionSelected={(option) => class_options.map((element) => { return element }).includes(option)}
                // onChange={(event, newValue) => updateClass_options(event, newValue)}
                // value={class_options}
                filterSelectedOptions
                renderInput={
                  (params) => <TextField
                    {...params}
                    label="Classes?"
                    margin="normal"
                    variant="outlined"
                  />
                }
              />
            </Grid> */}

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                id="clubBox"
                multiple
                className={classes.autoComplete}
                options={Club}
                getOptionLabel={(option) => option.title}
                // getOptionSelected={(option) => club.map((element) => { return element.title }).includes(option.title)}
                // onChange={(event, newValue) => updateClub(event, newValue)}
                // value={club}
                filterSelectedOptions
                renderInput={
                  (params) => <TextField
                    {...params}
                    label="Clubs?"
                    // margin="normal"
                    variant="outlined"
                  />
                }
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="researchBox"
                className={classes.autoComplete}
                options={Research}
                getOptionLabel={(option) => option.title}
                // getOptionSelected={(option) => research.map((element) => { return element.title }).includes(option.title)}
                // onChange={(event, newValue) => updateResearch(event, newValue)}
                // value={research}
                filterSelectedOptions
                renderInput={
                  (params) => <TextField
                    {...params}
                    label="Research Groups?"
                    // margin="normal"
                    variant="outlined"
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
          </Button>
        <Button onClick={props.handleClose} color="primary">
          Update
          </Button>
      </DialogActions>
    </Dialog>

  );
}
