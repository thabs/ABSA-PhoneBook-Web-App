/*eslint-disable*/
import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// @material-ui/core components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
// components
import {SimpleAppBar, NavigationItems} from 'components';
// style
import useStyles from './Sidebar.styles';

const switchRoutes = (routes) => (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    <Redirect from="/" to={routes[0].path} />
  </Switch>
);

const Sidebar = (props) => {
  const classes = useStyles();
  // states
  const [open, setOpen] = useState(false);
  // props
  const {navigations, routes, ...others} = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SimpleAppBar open={open} handleDrawerOpen={() => setOpen(true)} />
      <Drawer
        variant="permanent"
        {...others}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <NavigationItems navigations={navigations} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {switchRoutes(routes)}
      </main>
    </div>
  );
};

Sidebar.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.object),
  routes: PropTypes.arrayOf(PropTypes.object),
  handleDrawerToggle: PropTypes.func,
  open: PropTypes.bool
};

export default Sidebar;
