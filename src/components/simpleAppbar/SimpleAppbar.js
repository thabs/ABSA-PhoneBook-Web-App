import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// @material-ui/core components
import {AppBar, Toolbar} from '@material-ui/core';
// @material-ui/core icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// App bar style
import useStyles from './SimpleAppbar.styles';
//! Assets
import {ReactComponent as Logo} from 'assets/img/logo-icon.svg';

const SimpleAppBar = ({open, handleDrawerOpen}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}>
          <MenuIcon />
        </IconButton>
        <div>
          <Logo />
        </div>
      </Toolbar>
    </AppBar>
  );
};

SimpleAppBar.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  logo: PropTypes.string,
  logoText: PropTypes.string
};

export default SimpleAppBar;
