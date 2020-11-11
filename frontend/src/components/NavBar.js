import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation } from 'react-router-dom';
import { useScrollTrigger } from '@material-ui/core';
import { useStyles } from '../styles/NavBar.styles';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
// Drawer Imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Icons
import BlockIcon from '@material-ui/icons/Block';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoginState } from '../redux/loginSlice';

const menuItems = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    title: 'Features',
    icon: <DescriptionIcon />,
    path: '/',
  },
  {
    title: 'Community',
    icon: <PeopleIcon />,
    path: '/',
  },
  {
    title: 'Support',
    icon: <ContactSupportIcon />,
    path: '/support',
  },
  {
    title: 'Profile',
    icon: <BlockIcon />,
    path: '/profile',
  },
  {
    title: 'Sign Up',
    icon: <BlockIcon />,
    path: '/signup',
  },
  {
    title: 'Search',
    icon: <BlockIcon />,
    path: '/search',
  },
  {
    title: 'About Us',
    icon: <BlockIcon />,
    path: '/aboutus',
  }
]
export default function NavBar() {
  const location = useLocation();
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
    dispatch(login());
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

  const menuList = (
    <List className={classes.list}>
      {menuItems.map((element) => {
        return (
          <ListItem button key={element.title} component={Link} to={element.path} onClick={() => {toggleDrawer(false)}}>
            <ListItemIcon>
              {element.icon}
            </ListItemIcon>
            <ListItemText>
              {element.title}
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )

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
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MenuItem onClick={handleSettingsClose}>
          {"Settings"}
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
          <Button color="inherit" onClick={renderProps.onClick}  >Login</Button>
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
        {menuList}
      </Drawer>
      <AppBar className={(!shouldUseScroll)? classes.solidBar : (trigger)? classes.scrolledBar : classes.bar} elevation={0}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {toggleDrawer(true)}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Connect<a style={{color: '#CC0000'}}>BU</a>
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