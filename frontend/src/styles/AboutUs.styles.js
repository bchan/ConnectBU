import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    screen: {
      paddingTop: '90px',
      paddingBottom: '120px',
    },
    container: {
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    boxes: {
      textAlign: 'center',
      overflowWrap: 'normal',
      maxWidth: '100%'
    },
    header: {
      textAlign: 'center',
    },
    image: {
      width: 'auto',
      borderRadius: '80%',
      height: '160px',
    },
    major: {
      margin: '0px',
      fontStyle: 'italic',
      color: 'gray',
    },
    funFact: {
      marginTop: '10px',
    }
  }));
  