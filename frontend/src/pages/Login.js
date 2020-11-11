import React from 'react';
import GoogleLogin from 'react-google-login';
import BackgroundImage from '../images/halloween.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    //   backgroundImage: `url(${BackgroundImage})`,
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' + `url(${BackgroundImage})`,
    //   height: '72vh',
      textAlign: 'center',
      padding: '450px 0',
    },
  }));
  

export default function Login() {
    const classes = useStyles();

    function test(res) {
        console.log(res);
    }

    return (
        <div className={classes.root}>
            <GoogleLogin 
                clientId="575450034905-v02tn4l35jt2s3mhd46impe7pb79cc18.apps.googleusercontent.com"
                buttonText="Sign In with BU Account"
                onSuccess={test}
                onFailure={test}
                cookiePolicy={'single_host_origin'}
                disabled={false}
            />
        </div>

    )
}
