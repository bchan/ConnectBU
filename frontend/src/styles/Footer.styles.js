import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '40px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#f5f6f7',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyright: {
    color: theme.palette.text.secondary,
    fontSize: 13,
  }
}));
