import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default useStyles;
