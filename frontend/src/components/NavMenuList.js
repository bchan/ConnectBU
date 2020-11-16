import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
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