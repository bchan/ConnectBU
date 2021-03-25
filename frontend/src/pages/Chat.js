import React from 'react';
import { App as SendbirdApp } from "sendbird-uikit";
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import "sendbird-uikit/dist/index.css";

import "../styles/Chat.styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginState } from '../redux/loginSlice';

const appID = "APP ID";
const userID = "USER EMAIL";
const nickname = "USER'S FULL NAME";

export default function Chat() {
  const history = useHistory();

  const isLoggedIn = useSelector(selectLoginState);
  if(!isLoggedIn){
    history.push("/")
  }

  return (
    <div>
      <div className="Chat">

      <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>
      <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: 10}}>
        <Link component={RouterLink} to="/">Home</Link>
        <Link component={RouterLink} to="/profile">Profile</Link>
        <Typography color="textPrimary">Chat</Typography>
      </Breadcrumbs>
      <SendbirdApp appId={appID} userId={userID} nickname={nickname}/>
    </div>
  
    
      
    
      </div>

  )
  

}