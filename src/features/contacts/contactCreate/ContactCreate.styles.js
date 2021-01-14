import {makeStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  button: {
    margin: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

export default useStyles;
