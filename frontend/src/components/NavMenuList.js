import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import BlockIcon from '@material-ui/icons/Block';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles/NavMenuList.styles';

export default function NavMenuList(props) {
  const classes = useStyles();
  const menuItems = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      title: 'Search',
      icon: <SearchIcon />,
      path: '/search',
    },
    {
      title: 'About Us',
      icon: <InfoIcon />,
      path: '/aboutus',
    },
    {
      title: 'Support',
      icon: <ContactSupportIcon />,
      path: '/support',
    },
    {
      title: 'Sign Up',
      icon: <BlockIcon />,
      path: '/signup',
    },

  ]

  return (
    <List className={classes.list}>
      {menuItems.map((element) => {
        return (
          <ListItem button key={element.title} component={Link} to={element.path} onClick={props.toggle}>
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
}