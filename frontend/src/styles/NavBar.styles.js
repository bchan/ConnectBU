import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    bar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
    },
    scrolledBar: {
      backgroundColor: '#1D2B36',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
    },
    solidBar: {
      backgroundColor: '#1D2B36',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 225,
    },
    profileButton: {
      backgroundColor: '#EB5757',
      color: 'white',
      '&:hover': {
        backgroundColor: '#B03E3E',
        color: 'white'
      },
      marginRight: 10
    }
  }));
  