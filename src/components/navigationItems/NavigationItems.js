import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
// @material-core
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// @material-icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// style
import {useTheme} from '@material-ui/core/styles';
import useStyles from './NavigationItems.styles';

const NavigationItems = ({navigations}) => {
  const classes = useStyles();
  const theme = useTheme();
  // states
  const [accountsOpen, setAccountsOpen] = useState(false);

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  const handleItemClick = (key) => {
    switch (key) {
      //! Accounts management
      case 0:
        setAccountsOpen(!accountsOpen);
        break;
    }
  };

  const getItemState = (key) => {
    switch (key) {
      //! Accounts Management
      case 0:
        return accountsOpen ? true : false;
      default:
        return false;
    }
  };

  var links = navigations.map(({title, mainIcon, children}, key) => {
    return (
      <>
        <ListItem button onClick={() => handleItemClick(key)} key={key}>
          <ListItemIcon>{mainIcon}</ListItemIcon>
          <ListItemText
            primary={title}
            primaryTypographyProps={{
              style: {color: theme.palette.text.primary}
            }}
          />
          {getItemState(key) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={getItemState(key)} timeout="auto" unmountOnExit>
          {children.map(({name, path, icon}) => {
            var active = activeRoute(path) ? true : false;
            return (
              <NavLink to={path} key={name} style={{textDecoration: 'none'}}>
                <ListItem
                  button
                  className={classes.nested}
                  selected={active}
                  key={name}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                      style: {color: theme.palette.text.primary}
                    }}
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </Collapse>
      </>
    );
  });

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {process.env.REACT_APP_NAME}
        </ListSubheader>
      }
      className={classes.root}>
      {links}
    </List>
  );
};

NavigationItems.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.object)
};

export default NavigationItems;
