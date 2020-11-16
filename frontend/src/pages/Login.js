import React from 'react';
import GoogleLogin from 'react-google-login';
import BackgroundImage from '../images/bucampus.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BackgroundImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '300px 0',
  },
}));


export default function Login() {
  const classes = useStyles();

  function test(res) {
    console.log(res);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Paper style={{height: '200px', opacity: '0.9'}}>
          <div style={{opacity: '1'}}>
          <p style={{paddingTop: '30px', fontFamily: 'Open Sans', fontSize: 24}}>Log in to ConnectBU</p>
          <GoogleLogin
            clientId="575450034905-v02tn4l35jt2s3mhd46impe7pb79cc18.apps.googleusercontent.com"
            buttonText="Sign In with BU Account"
            onSuccess={test}
            onFailure={test}
            cookiePolicy={'single_host_origin'}
            disabled={false}
          />
          </div>
        </Paper>
      </Container>

    </div>

  )
}
