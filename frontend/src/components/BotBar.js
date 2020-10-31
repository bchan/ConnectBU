import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BiSearch } from 'react-icons/bi';
import { GoGear }  from 'react-icons/go';
import { BiSupport } from 'react-icons/bi';
import { useStyles } from '../styles/BotBar.styles';

export default function BotBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Search" icon = {< BiSearch/>} color='inherit' />
      <BottomNavigationAction label="Settings" icon={<GoGear />} color = 'inherit'/>
      <BottomNavigationAction label="Support" icon={<BiSupport color = 'inherit'/>} />
    </BottomNavigation>
  );
}