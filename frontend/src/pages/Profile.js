import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import EditDialog from '../components/EditDialog';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { useSnackbar } from 'notistack';

import pic from '../images/image.jpg';
import axios from 'axios';

// Redux
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../redux/loginSlice';
import IncompleteDialog from '../components/IncompleteDialog';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  screen: {
    paddingTop: '90px',
    marginLeft: 50,
    marginRight: 50
  },
  boxes: {
    padding: 30,
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: "#F4F4F4",
    borderRadius: 10
  },
  image: {
    width: '8%',
    minWidth: 120,
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
  button: {
    backgroundColor: '#EB5757',
    color: 'white',
    '&:hover': {
      backgroundColor: '#B03E3E',
      color: 'white'
    },
    margin: '5px',
  },
  message: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    }
  }
}));

const useConstructor = (callBack = () => { }) => {
  const [hasCalled, setCalled] = useState(false);
  if (hasCalled) return;
  callBack();
  setCalled(true);
}

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [openIncomplete, setIncomplete] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorState, setErrorState] = React.useState({ isOpen: false, errorMessage: '' });
  const [successState, setSuccessState] = React.useState({ isOpen: false, successMessage: '' })
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let email = useSelector(selectUserEmail);
  let [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    major1: '',
    major2: '',
    minor: '',
    year: ''
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useConstructor(() => {
    axios.get('/user/' + email)
      .then((res) => {
        let userData = res.data;
        if (userData.major1 === '') {
          setIncomplete(true);
        }

        setProfileData({
          firstName: userData.first_name,
          lastName: userData.last_name,
          major1: userData.major1,
          major2: userData.major2,
          minor: userData.minor,
          year: userData.year,
          research: userData.research,
          club: userData.club,
          interests: userData.interests
        });
      })
      .catch((err) => {
        console.log(err);
      })
  })

  let handleOpen = () => {
    setOpen(true);
  }

  let handleClose = () => {
    setOpen(false);
  }

  let setNewProfileData = (newData) => {
    newData.schoolYear = 2021; // NEED TO TAKE OUT LATER
    newData.hasIpad = 0; // NEED TO TAKE OUT LATER
    axios.put('/user/' + email, newData)
      .then((res) => {
        setProfileData(newData);
        let successMessage = 'Sucessfully updated profile data';
        enqueueSnackbar(successMessage, { variant: 'success' });
      })
      .catch((err) => {
        let errorMessage = 'Unable to update profile data. Please try again.';
        enqueueSnackbar(errorMessage, { variant: 'error' });
      })
  }

  let handleIncompleteClose = () => {
    setIncomplete(false);
    setOpen(true);
  }

  let showErrorMessage = (message) => {
    enqueueSnackbar(message, { variant: 'error' });
  }

  return (
    <div className={classes.screen}>
      <EditDialog open={open} handleClose={handleClose} profileData={profileData} handleChange={setNewProfileData} showError={showErrorMessage} />
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/">Home</Link>
        <Typography color="textPrimary">Profile</Typography>
      </Breadcrumbs>

      <Grid
        container
        className={classes.boxes}
        justify="center"
        spacing={2}
      >
        <Grid item container spacing={2} sm={12} md={8} alignItems="center">
          <Grid item>
            <img style={{ width: 128, height: 128, borderRadius: '50%', }} alt="complex" src={pic} />
          </Grid>
          <Grid item container xs={12} sm={12} md={10} spacing={2}>
            <Grid item xs={12}>
              <div style={{ fontSize: 36, fontWeight: 'bold' }}>{profileData.firstName + " " + profileData.lastName}</div>
            </Grid>
            <Grid item xs={12}>
              {(profileData.major1 !== "") ?
                <Chip label={profileData.major1} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px' }} />
                :
                <div></div>
              }
              {(profileData.major2 !== '' && profileData.major2 !== null) ?
                <Chip label={profileData.major2} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px' }} />
                :
                <div></div>
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={4} alignItems="center" className={classes.message}>
          <Button className={classes.button}>Message</Button>
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Grid>

      </Grid>

      <Grid style={{ borderBottom: "1px solid grey" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Activities" {...a11yProps(1)} />
          <Tab label="Classes" {...a11yProps(2)} />
          <Tab label="Interests (Coming Soon)" {...a11yProps(3)} disabled />
        </Tabs>
      </Grid>

      <div
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        {value === 0 && (
          <Grid
            container
            // style={{
            //   paddingLeft: 30, paddingRight: 30,
            //   marginBottom: 30,
            //   marginTop: 10,
            //   backgroundColor: "#F4F4F4",
            //   borderRadius: 10

            // }}
            // spacing={4}
            className={classes.boxes}
          >

            <Grid item xs={12}>
              <p style={{ fontWeight: "bold" }}>Year of Graduation</p>
            </Grid>
            <Grid item xs={12}>
              <p>{(profileData.year !== 0) ? profileData.year : ''}</p>
            </Grid>

          </Grid>
        )}
      </div>

      <div
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        {value === 1 && (
          <Grid
            container
            direction="column"
            className={classes.boxes}>

            <Grid>
              <h2 style={{ marginTop: 0 }}>Clubs</h2>
              <p>Coming soon</p>
            </Grid>

            <Grid className={classes.separation}></Grid>

            <Grid>
              <h2 style={{ marginTop: 0 }}>Labs</h2>
              <p>Coming soon</p>
            </Grid>

            <Grid className={classes.separation}></Grid>

            <Grid>
              <h2 style={{ marginTop: 0 }}>On Campus Job</h2>
              <p>Coming soon</p>
            </Grid>

          </Grid>
        )}
      </div>

      <div
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        {value === 2 && (
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            className={classes.boxes}>

            <Grid>
              <h2 style={{ marginTop: 0 }}>Classes</h2>
              <p>Coming soon</p>
            </Grid>

          </Grid>
        )}
      </div>
      <IncompleteDialog open={openIncomplete} onClose={handleIncompleteClose} />
      <div style={{ height: 100 }}></div>

    </div>
  );
}