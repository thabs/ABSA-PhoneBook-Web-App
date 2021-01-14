// @material-ui/icons
import CallEndOutlinedIcon from '@material-ui/icons/CallEndOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

// sidebar nav config
const nav = () => {
  let items = [];
  let children = [];

  children.push({
    name: 'View contacts',
    path: '/contacts/view',
    icon: <PeopleOutlinedIcon color="primary" />
  });

  children.push({
    name: 'Create contact',
    path: '/contacts/create',
    icon: <PersonAddOutlinedIcon color="primary" />
  });

  items.push({
    title: 'My Contacts',
    mainIcon: <CallEndOutlinedIcon color="primary" />,
    children
  });

  return items;
};

export default nav;
