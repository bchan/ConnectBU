import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    joinButton: {
      backgroundColor: '#EB5757',
      color: 'white',
      '&:hover': {
        backgroundColor: '#B03E3E',
        color: 'white'
      },
      textTransform: 'none'
    },
    sectionHeader: {
      color: '#EB5757',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
      height: '100%'
    },
    container: {
      maxWidth: '100%',
      paddingBottom: '100px'
    }
  }));
