import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(8, 0),
  },
  container: {
    textAlign: 'center',
  },
  grid: {
    padding: theme.spacing(4, 0),
    justifyContent: 'center',
  },
  gridItem: {
    color: theme.palette.text.primary,
    height: '100%',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  logo: {
    color: theme.palette.text.primary,
    fontSize: 26,
    textDecoration: 'none',
  },
}));
