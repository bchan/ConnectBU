import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles/Footer.styles';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {
  const classes = useStyles();
  const links = [
    {
      name: 'ABOUT US',
      link: '/aboutus',
    },
    {
      name: 'CONTACT US',
      link: '/support',
    },
    {
      name: 'FAQ',
      link: '/support',
    },
  ]

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} sm={5} container spacing={2}>
            <Grid item xs={12}>
              <div className={classes.heading}>About Us</div>
            </Grid>
            <Grid item xs={12}>
              <div>ConnectBU is a platform that seeks to democratize access to personalized advising by centralizing many support and networking resources into a single place. Through ConnectBU, you can search for and connect with other students based on club affiliation, class history, research, and interests!</div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}></Grid>

          <Grid 
            item
            container
            xs={12} sm={4} md={2}
            alignContent="center"
            alignItems="center"
            justify="center"
          >
            {links.map((element) => {
              return (
                <Grid item xs={12} key={element.name}>
                  <Link to={element.link} className={classes.gridItem}>{element.name}</Link>
                </Grid>
              )
            })}
          </Grid>

          <Grid item xs={12} sm={1}></Grid>

          <Grid
            item
            container
            xs={12} sm={12} md={2}
            alignItems="center"
            className={classes.socialItems}
          >
            <Grid item xs={4}>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} className={classes.copyright}>
            <div>Copyright © ConnectBU 2021</div>
          </Grid> */}

        </Grid>
      </Container>
    </footer>
  )
}