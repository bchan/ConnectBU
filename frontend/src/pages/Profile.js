import React from 'react';
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

import pic from '../images/image.jpg';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  screen: {
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
    marginLeft: 10
  }
}));

export default function NewProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.screen}>

      <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>
      <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>

      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/">Home</Link>
        <Typography color="textPrimary">Profile</Typography>
      </Breadcrumbs>

      <Grid
        container
        className={classes.boxes}>

        <Grid item>
          <ButtonBase className={classes.image}>
            <img style={{ width: 128, height: 128, borderRadius: '50%', }} alt="complex" src={pic} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container alignItems="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h1 style={{ fontSize: 36 }}>Artoo the Terrier</h1>
              <Chip label="Computer Engineering" style={{ backgroundColor: "#C4C4C4" }} />
            </Grid>
          </Grid>
          <Grid item>
            <Button className={classes.button} component={Link}>Message</Button>
          </Grid>
        </Grid>

      </Grid>

      <Grid style={{ borderBottom: "1px solid grey" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
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
            style={{
              paddingLeft: 30, paddingRight: 30,
              marginBottom: 30,
              marginTop: 10,
              backgroundColor: "#F4F4F4",
              borderRadius: 10
            }}
            spacing={4}>

            <Grid item>
              <p style={{ fontWeight: "bold" }}>Country</p>
            </Grid>
            <Grid item xs={12} sm>
              <p>Saudi Arabia</p>
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
              <h2 style={{ marginTop: 0 }}>Extra-Curriculars</h2>
              <p>Walking, peeing</p>
            </Grid>

            <Grid className={classes.separation}></Grid>

            <Grid>
              <h2 style={{ marginTop: 0 }}>Labs</h2>
              <p>None</p>
            </Grid>

            <Grid className={classes.separation}></Grid>

            <Grid>
              <h2 style={{ marginTop: 0 }}>On Campus Job</h2>
              <p>Being petted</p>
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
              <p>I don't do classes. Okay?</p>
            </Grid>

          </Grid>
        )}
      </div>

      <div style={{ height: 100 }}></div>

    </div>
  );
}