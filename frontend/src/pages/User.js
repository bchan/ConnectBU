import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link as RouterLink, useParams, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useSnackbar } from 'notistack';

import default_pic from '../images/image.jpg';
import axios from 'axios';

// Redux
import { useSelector } from 'react-redux';
import { selectLoginState, selectUserEmail } from '../redux/loginSlice';

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

export default function User() {
  const history = useHistory();
  const { id } = useParams();
  const isLoggedIn = useSelector(selectLoginState);
  const logged_in_email = useSelector(selectUserEmail);
  if (isLoggedIn) {
    if (logged_in_email === id + "@bu.edu") {
      history.push("/profile")
    }
  }

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  let email = id + "@bu.edu"
  let [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    major1: '',
    major2: '',
    minor: '',
    year: '',
    research: [],
    club: [],
    interests: [],
    classes: [],
    profile_pic_url: '',
  })

  let pic = profileData.profile_pic_url;
  if (profileData.profile_pic_url === '') pic = default_pic;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useConstructor(() => {
    axios.get('/api/user/' + email)
      .then((res) => {
        let userData = res.data;
        setProfileData({
          firstName: userData.first_name,
          lastName: userData.last_name,
          major1: userData.major1,
          major2: userData.major2,
          minor: userData.minor,
          year: userData.year,
          research: userData.research,
          club: userData.club,
          interests: userData.interests,
          classes: userData.classes,
          profile_pic_url: userData.profile_pic_url,
        });
      })
      .catch((err) => {
        console.log(err.response.status);
        if(err.response.status === 404){
          enqueueSnackbar('User Not Found.', { variant: 'error' });
          history.goBack();
        }
      })
  })

  return (
    <div className={classes.screen}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/">Home</Link>
        <Typography color="textPrimary">User</Typography>
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
                <Chip label={profileData.major1} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px', maxWidth: '100%' }} />
                :
                ''
              }
              {(profileData.major2 !== '' && profileData.major2 !== null) ?
                <Chip label={profileData.major2} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px', maxWidth: '100%' }} />
                :
                ''
              }
              {(profileData.minor !== "" && profileData.minor !== null) ?
                <Chip label={'Minor: ' + profileData.minor} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px', maxWidth: '100%' }} />
                :
                ''
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={4} alignItems="center" className={classes.message}>
          <Button className={classes.button} onClick={() => { history.push('/chat') }}>Message</Button>
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
          <Tab label="Interests" {...a11yProps(3)} />
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
              <h2 style={{ marginTop: 0 }}>Year of Graduation</h2>
            </Grid>
            <Grid item xs={12}>
              <p>{(profileData.year !== 0 && profileData.year !== '') ? profileData.year : 'Unspecified.'}</p>
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
              {(profileData.club.length !== 0) ?
                <ul>
                  {profileData.club.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                :
                <p>No clubs listed.</p>
              }
            </Grid>

            <Grid className={classes.separation}></Grid>

            <Grid>
              <h2 style={{ marginTop: 0 }}>Labs</h2>
              {(profileData.research.length !== 0) ?
                <ul>
                  {profileData.research.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                :
                <p>No labs listed.</p>
              }

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
              {(profileData.classes.length !== 0) ?
                <ul>
                  {profileData.classes.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                :
                <p>No classes listed.</p>
              }
            </Grid>

          </Grid>
        )}
      </div>

      <div
        role="tabpanel"
        hidden={value !== 3}
        id={`simple-tabpanel-${3}`}
        aria-labelledby={`simple-tab-${3}`}
      >
        {value === 3 && (
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            className={classes.boxes}>
            <Grid>
              <h2 style={{ marginTop: 0 }}>Interests</h2>
              {(profileData.interests.length !== 0) ?
                <ul>
                  {profileData.interests.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                :
                <p>No interests listed.</p>
              }
            </Grid>
          </Grid>
        )}
      </div>
      <div style={{ height: 100 }}></div>

    </div>
  );
}