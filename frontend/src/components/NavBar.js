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
import NavMenuRight from './NavMenuRight';


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
  const shouldUseScroll = location.pathname === '/';
  
  let toggleDrawer = (open) => {
    setState({isDrawerOpen: open});
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
          <NavMenuRight />
        </Toolbar>
      </AppBar>
    </div>
  );
}