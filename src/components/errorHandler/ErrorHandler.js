import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Container
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorHandler = (props) => {
  // props
  const {children, title, error, onClearError} = props;

  return (
    <Container>
      {children}
      <Dialog
        open={error ? true : false}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {error?.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClearError} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

ErrorHandler.propTypes = {
  title: PropTypes.string,
  error: PropTypes.object,
  onClearError: PropTypes.func
};

export default ErrorHandler;
