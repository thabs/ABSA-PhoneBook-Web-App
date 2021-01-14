import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// @material-ui/core components
import {AppBar, Toolbar, Divider, Menu, MenuItem} from '@material-ui/core';
// @material-ui/core icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// App bar style
import useStyles from './SimpleAppbar.styles';
//! Assets
import {ReactComponent as Logo} from 'assets/img/eblocks-icon.svg';

const SimpleAppBar = ({open, handleDrawerOpen}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <div className={classes.toolbarButtons}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={menuOpen}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Change Password</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
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
