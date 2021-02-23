import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import EditDialog from '../components/EditDialog';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import pic from '../images/image.jpg';
import axios from 'axios';

// Redux
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../redux/loginSlice';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  screen: {
    marginTop: '90px',
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
  const [open, setOpen] = useState(false);
  let email = useSelector(selectUserEmail);
  let [name, setName] = useState('John Smith');
  let [major1, setMajor1] = useState('Biomedical Engineering');
  let [major2, setMajor2] = useState('Electrical Engineering');
  let [minor, setMinor] = useState('Biology');
  let [year, setYear] = useState('2021');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useConstructor(() => {
    axios.get('/user/' + email)
      .then((res) => {
        let userData = res.data;
        setName(userData.first_name + " " + userData.last_name);
        setMajor1(userData.major1);
        setMajor2((userData.major2 === null) ? '' : userData.major2);
        setMinor((userData.minor === null) ? '' : userData.minor);
        setYear(userData.year);
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

  return (
    <div className={classes.screen}>
      <EditDialog open={open} handleClose={handleClose} />
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/">Home</Link>
        <Typography color="textPrimary">Profile</Typography>
      </Breadcrumbs>

      <Grid
        container
        className={classes.boxes}
        spacing={2}
      >

        <Grid item xs={12} sm={12} md={2}>
          <img style={{ width: 128, height: 128, borderRadius: '50%', }} alt="complex" src={pic} />
        </Grid>
        <Grid item xs={12} sm={12} md={10} container alignItems="center" spacing={1} style={{ width: '100%' }}>
          <Grid item container spacing={2} sm={8} md={10}>
            <Grid item xs={12}>
              <div style={{ fontSize: 36, fontWeight: 'bold' }}>{name}</div>
            </Grid>
            <Grid item xs={12}>
              <Chip label={major1} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px' }} />
              {(major2 !== '') ?
                <Chip label={major2} style={{ backgroundColor: "#C4C4C4", marginRight: '5px', marginBottom: '5px' }} />
                :
                <div></div>
              }
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={4} md={2} alignItems="center" justify="center" style={{textAlign: 'center'}}>
            <Grid item xs={12}>
              <Button className={classes.button}>Message</Button>
            </Grid>
            <Grid item xs={12}>
              <IconButton onClick={handleOpen}>
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
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
              <p>{year}</p>
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

      <div style={{ height: 100 }}></div>

    </div>
  );
}