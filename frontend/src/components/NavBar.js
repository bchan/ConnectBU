import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useScrollTrigger } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard
    })
  },
  scrolledBar: {
    backgroundColor: '#EB5757',
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger(
    {
      disableHysteresis: true,
      threshold: 100
    }
  )

  return (
    <div className={classes.root}>
      <AppBar className={trigger? classes.scrolledBar : classes.bar}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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
