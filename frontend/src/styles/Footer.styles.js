import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#1D2B36',
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
    color: '#d1d1d1',
    height: '100%',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyright: {
    color: '#d1d1d1',
    fontSize: 13,
  }
}));
