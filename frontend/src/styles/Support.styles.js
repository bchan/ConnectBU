import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '90px',
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    header: {
        fontFamily: 'Open Sans',
        fontWeight: 'light',
        fontSize: 32, 
    },
    qaElement: {
        fontFamily: 'Open Sans',
        padding: '10px',
        marginBottom: '10px'
    }
  }));
