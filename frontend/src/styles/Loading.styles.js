import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  image: {
    width: '60%',
    height: 'auto',
  },
  message: {
    fontFamily: ['Open Sans', 'sans-serif'],
    fontSize: '18px',
    marginBottom: '15px',
  }
}));
