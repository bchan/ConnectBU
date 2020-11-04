import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
  },
  container: {
    textAlign: 'center',
    
  },
  divider: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  grid: {
    paddingTop: '30px',
    justifyContent: 'center',
  },
  gridItem: {
    color: theme.palette.text.secondary,
    height: '100%',
    textDecoration: 'none',
    fontSize: 14
  },
  copyright: {
    color: theme.palette.text.secondary,
    fontSize: 11,
  }
}));
