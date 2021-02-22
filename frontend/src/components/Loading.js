import React from 'react';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dog from '../images/sleeping_terrier.png';
import { useStyles } from '../styles/Loading.styles';

export default function Loading(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <img src={Dog} className={classes.image} />
      <div className={classes.message}>
        {props.message}
      </div>
      <LinearProgress />
    </Container>        
  )
}
