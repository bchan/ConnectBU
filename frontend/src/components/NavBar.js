import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useScrollTrigger } from '@material-ui/core';
import { useStyles } from '../styles/NavBar.styles';
import { Link } from 'react-router-dom';

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

export default function NavBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger(
    {
      disableHysteresis: true,
      threshold: 100
    }
  )
  const [state, setState] = React.useState({
    isDrawerOpen: false,
  });

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
      path: '/',
    },
  ]

  const menuList = (
    <List className={classes.list}>
      {menuItems.map((element) => {
        return (
          <ListItem button component={Link} to={element.path} onClick={() => {toggleDrawer(false)}}>
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

  let toggleDrawer = (open) => {
    setState({isDrawerOpen: open});
  }

  return (
    <div className={classes.root}>
      <Drawer
        open={state.isDrawerOpen}
        onClose={() => {toggleDrawer(false)}}
      >
        {menuList}
      </Drawer>
      <AppBar className={trigger? classes.scrolledBar : classes.bar}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {toggleDrawer(true)}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ConnectBU
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
