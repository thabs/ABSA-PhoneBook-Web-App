import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
});

export default useStyles;
