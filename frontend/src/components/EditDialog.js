import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
  let [firstName, setFirstName] = useState(props.profileData.firstName || '');
  let [lastName, setLastName] = useState(props.profileData.lastName || '');
  // let [country, setCountry] = useState(props.profileData.country || '');
  // TODO: Add country
  let [major1, setMajor1] = useState(props.profileData.major1 || '');
  let [major2, setMajor2] = useState(props.profileData.major2 || '');
  let [minor, setMinor] = useState(props.profileData.minor || '');

  useEffect(() => {
    setFirstName(props.profileData.firstName || '');
    setLastName(props.profileData.lastName || '');
    setMajor1(props.profileData.major1 || '');
    setMajor2(props.profileData.major2 || '');
    setMinor(props.profileData.minor || '');
  }, [props.profileData, props.open])

  let getMajorList = () => {
    let majorList = [];
    if (major1 !== '') majorList.push({ title: major1 });
    if (major2 !== '') majorList.push({ title: major2 });

    return majorList;
  }

  let updateMajors = (value) => {
    console.log(value);
    let valueLength = value.length;
    if (valueLength >= 2) {
      setMajor1(value[0].title);
      setMajor2(value[1].title);
    } else if (valueLength >= 1) {
      setMajor1(value[0].title);
      setMajor2('');
    } else {
      setMajor1('');
      setMajor2('');
    } 
  }

  let updateMinor = (value) => {
    if (value.length >= 1) {
      setMinor(value[0].title);
    } else {
      setMinor('');
    }
  }

  let sendUpdate = () => {
    props.handleClose();
    props.handleChange({
      firstName: firstName,
      lastName: lastName,
      major1: major1,
      major2: major2,
      minor: minor,
    })
  }

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
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                className={classes.textField}
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
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
                getOptionSelected={(option) => getMajorList().map((element) => { return element.title }).includes(option.title)}
                onChange={(event, newValue) => updateMajors(newValue)}
                value={getMajorList()}
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
                getOptionSelected={(option) => minor.includes(option.title)}
                onChange={(event, newValue) => updateMinor(newValue)}
                value={(minor !== '')? [{ title: minor }] : []}
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
        <Button onClick={sendUpdate} color="primary">
          Update
          </Button>
      </DialogActions>
    </Dialog>

  );
}
