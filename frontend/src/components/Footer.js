import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles/Footer.styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl" className={classes.container}>
        <Divider />
        <Grid container spacing={4} justify="center" alignItems="stretch" className={classes.grid}>
          <Grid item xs={12} sm={12} className={classes.logo} component={Link} to={"/"}>
            Connect<span style={{color: '#CC0000'}}>BU</span>
          </Grid>
          <Grid item xs={8} sm={2} className={classes.gridItem} component={Link} to={"/"}>
            Mobile App
          </Grid>
          <Grid item xs={8} sm={2} className={classes.gridItem} component={Link} to={"/"}>
            Community
          </Grid>
          <Grid item xs={8} sm={2} className={classes.gridItem} component={Link} to={"/"}>
            Team
          </Grid>
          <Grid item xs={8} sm={2} className={classes.gridItem} component={Link} to={"/"}>
            Help
          </Grid>
          <Grid item xs={12} sm={12}>
            Copyright © ConnectBU 2020
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}