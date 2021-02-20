import React from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoginState } from '../redux/loginSlice';

// Axios
import axios from 'axios';

export default function NavMenuRight() {
  const history = useHistory();
  const isLoggedIn = useSelector(selectLoginState);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  let responseSuccess = (event) => {
    let userEmail = event.profileObj.email;
    let token = event.tokenId;

    axios.post('/api/login', { tokenId: token })
    .then((res) => {
      dispatch(login(userEmail));
      history.push('/profile');
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
      console.log('Successfully logged out');
      history.push('/');
    })
    .catch((err) => {
      console.log('ERROR');
      console.log(err);
    })
  }

  return (
    (isLoggedIn)?
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
        autoFocus={false}
      >
        <MenuItem onClick={handleSettingsClose}>
          {"Settings"}
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>
          {"Logout"}
        </MenuItem>
      </Menu>
      </div>
    :
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
  )
}


