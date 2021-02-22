import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dog from '../images/sleeping_terrier.png';
import { useStyles } from '../styles/Loading.styles';

export default function Loading(props) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Container maxWidth="xs" className={classes.container}>
        <img src={Dog} className={classes.image} />
        <div className={classes.message}>
          {props.message}
        </div>
        <LinearProgress />
      </Container>
    </Box>
  )
}
