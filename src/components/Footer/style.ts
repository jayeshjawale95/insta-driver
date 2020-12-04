import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
    background: '#131313',
    color: '#fff',
    marginTop: '30px',
    padding: '15px',
  },
}));

export default useStyles;
