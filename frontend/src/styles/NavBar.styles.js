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
      backgroundColor: '#EB5757',
      transition: theme.transitions.create(['background-color'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard
      })
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
  }));
  