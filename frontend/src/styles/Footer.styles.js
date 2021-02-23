import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: '#1D2B36',
    color: 'white',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  gridItem: {
    color: 'white',
    height: '100%',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialItems: {
    textAlign: 'center',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 13,
  }
}));
