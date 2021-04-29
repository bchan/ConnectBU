import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles/NavMenuList.styles';

// Redux
import { useSelector } from 'react-redux';
import { selectLoginState } from '../redux/loginSlice';

export default function NavMenuList(props) {
  const classes = useStyles();
  const isLoggedIn = useSelector(selectLoginState);
  const menuItems = (!isLoggedIn)?
  [
    {
      title: 'Home',
      icon: <HomeIcon />,
      path: '/',
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
  ] :
  [
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
      title: 'Chat',
      icon: <ChatIcon />,
      path: '/chat',
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
  ];

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