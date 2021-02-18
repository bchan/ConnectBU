import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation, useHistory } from 'react-router-dom';
import { useScrollTrigger } from '@material-ui/core';
import { useStyles } from '../styles/NavBar.styles';
import GoogleLogin from 'react-google-login';

// Drawer Imports
import Drawer from '@material-ui/core/Drawer';
import NavBarMenuList from './NavMenuList';

// Right Menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoginState } from '../redux/loginSlice';

// Axios
import axios from 'axios';


export default function NavBar() {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  let trigger = useScrollTrigger(
    {
      disableHysteresis: true,
      threshold: 100
    }
  );
  const [state, setState] = React.useState({
    isDrawerOpen: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isLoggedIn = useSelector(selectLoginState);
  const dispatch = useDispatch();

  const shouldUseScroll = location.pathname === '/';
  
  let toggleDrawer = (open) => {
    setState({isDrawerOpen: open});
  }

  let responseSuccess = (event) => {
    axios.post('/api/login', { tokenId: event.tokenId })
    .then((res) => {
      dispatch(login());
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
    })
  }

  let responseError = (event) => {
    if (event.error !== "popup_closed_by_user") {
      alert(event.error);
    }
  }

  let handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  let handleSettingsClose = () => {
    setAnchorEl(null);
  }

  let handleLogout = () => {
    dispatch(logout());
    handleSettingsClose();
    axios.get('/api/logout')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log('ERROR');
      console.log(err);
    })
  }

  let loginElement;
  if (isLoggedIn) {
    loginElement = (
      <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleSettingsClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl !== null}
        onClose={handleSettingsClose}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MenuItem onClick={handleSettingsClose}>
          {"Settings"}
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>
          {"Logout"}
        </MenuItem>
      </Menu>
      </div>
    );
  } else {
    loginElement = (
      <GoogleLogin 
        clientId="575450034905-v02tn4l35jt2s3mhd46impe7pb79cc18.apps.googleusercontent.com"
        // buttonText="Sign In with BU Account"
        onSuccess={responseSuccess}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}
        style={{disabled: 'false'}}
        render={(renderProps) => (
          <Button color="inherit" onClick={renderProps.onClick}>Login</Button>
        )}
      />
    );
  }

  return (
    <div className={classes.root}>
      <Drawer
        open={state.isDrawerOpen}
        onClose={() => {toggleDrawer(false)}}
      >
        <NavBarMenuList toggle={() => toggleDrawer(false)}/>
      </Drawer>
      <AppBar className={(!shouldUseScroll)? classes.solidBar : (trigger)? classes.scrolledBar : classes.bar} elevation={0}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {toggleDrawer(true)}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Connect<span style={{color: '#CC0000'}}>BU</span>
          </Typography>
          {/* <Button className={classes.profileButton} component={Link} to={"/profile"}>
            Profile
          </Button> */}
          {loginElement}
        </Toolbar>
      </AppBar>
    </div>
  );
}