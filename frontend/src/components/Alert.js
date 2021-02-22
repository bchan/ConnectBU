import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function Alert(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={props.handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <MuiAlert elevation={6} variant="filled" onClose={props.handleClose} severity={props.type}>
        {props.message}
      </MuiAlert>
    </Snackbar>
  )
}
