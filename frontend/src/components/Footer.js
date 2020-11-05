import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles/Footer.styles';

export default function Footer() {
  const classes = useStyles();
  const links = [
    {
      name: 'Mobile App',
      link: '/',
    },
    {
      name: 'Community',
      link: '/',
    },
    {
      name: 'Team',
      link: '/',
    },
    {
      name: 'Help',
      link: '/support',
    },
  ]

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3} justify="center" alignItems="stretch" className={classes.grid}>

          {links.map((element) => {
            return (
              <Grid item xs={8} sm={2} key={element.name}>
                <Link to={element.link} className={classes.gridItem}>{element.name}</Link>
              </Grid>
            )
          })}

          <Grid item xs={12} sm={12} className={classes.copyright}>
            Copyright © ConnectBU 2020
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}