import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Alert from './Alert';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoginState } from '../redux/loginSlice';

export default function NavMenuRight() {
  const history = useHistory();
  const isLoggedIn = useSelector(selectLoginState);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [errorState, setErrorState] = React.useState({ isOpen: false, errorMessage: '' });
  const [successState, setSuccessState] = React.useState({ isOpen: false, successMessage: '' });

  let responseSuccess = (event) => {
    let userEmail = event.profileObj.email;
    let token = event.tokenId;

    axios.post('/api/login', { tokenId: token })
      .then((res) => {
        dispatch(login(userEmail));
        history.push('/profile');
        setSuccessState({ isOpen: true, successMessage: 'Sucessfully logged in' });
      })
      .catch((error) => {
        if (error.response.data === 'Invalid email') {
          setErrorState({ isOpen: true, errorMessage: 'You must use a BU email to sign in/up' });
        }
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
        history.push('/');
        setSuccessState({ isOpen: true, successMessage: 'Sucessfully logged out' });
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);
      })
  }

  let handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorState({ isOpen: false, errorMessage: '' });
  };

  let handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessState({ isOpen: false, successMessage: '' });
  };

  return (
    <div>
      {(isLoggedIn) ?
        <div>
          <IconButton
            component={Link}
            to="/search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          {/* <IconButton
          component={Link}
          to="/profile"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton> */}
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleSettingsClick}
          >
            {/* <MoreVertIcon /> */}
            <AccountCircleIcon />
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
            <MenuItem onClick={handleSettingsClose} component={Link} to="/profile">
              {"Profile"}
            </MenuItem>
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
          style={{ disabled: 'false' }}
          render={(renderProps) => (
            <Button color="inherit" onClick={renderProps.onClick}>Login</Button>
          )}
        />
      }

      <Alert 
        open={errorState.isOpen}
        handleClose={handleErrorClose}
        message={errorState.errorMessage}
        type="error"
      />

      <Alert 
        open={successState.isOpen}
        handleClose={handleSuccessClose}
        message={successState.successMessage}
        type="success"
      />
    </div>
  )

}
