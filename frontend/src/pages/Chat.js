import React, { useEffect, useState } from 'react';
import { App as SendbirdApp } from "sendbird-uikit";
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import "sendbird-uikit/dist/index.css";
import axios from 'axios';

import "../styles/Chat.styles.css";
import { useSelector } from 'react-redux';
import { selectLoginState, selectUserEmail } from '../redux/loginSlice';

export default function Chat() {
  const history = useHistory();
  const isLoggedIn = useSelector(selectLoginState);
  if (!isLoggedIn) {
    history.push("/")
  }

  const appID = "APP ID";
  const userID = useSelector(selectUserEmail);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    axios.get('/user/' + userID)
      .then((res) => {
        let userData = res.data;
        setNickname(userData.first_name + ' ' + userData.last_name);
      })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <div>
      <div className="Chat">
        <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>
        <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: 10 }}>
          <Link component={RouterLink} to="/">Home</Link>
          <Link component={RouterLink} to="/profile">Profile</Link>
          <Typography color="textPrimary">Chat</Typography>
        </Breadcrumbs>
        {(nickname === '') ? <div></div> : <SendbirdApp appId={appID} userId={userID} nickname={nickname} />}
      </div>
    </div>
  )
}