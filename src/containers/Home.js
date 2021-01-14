import React, {useState} from 'react';
// core components
import Sidebar from 'components/sidebar/Sidebar';
// navigation and routes
import routes from 'routes';
import nav from 'navigations';
//! Assets
// side bar style
import useStyles from './Home.styles';

const Home = () => {
  // styles
  const classes = useStyles();
  const navigations = nav({permissions: 'Administrator'});
  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        navigations={navigations}
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
      />
    </div>
  );
};

export default Home;
