import { makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#fff',
  },
  appBorder: {
    background: '#3B3B3B',
    width: '100%',
    height: '15px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  instaDriver: {
    height: '45px',
  },
  title: {
    flexGrow: 1,
  },
  menuButtonItems: {
    marginLeft: 'auto',
  },
  profileBtn:{
    margin: '0 15px',
    backgroundColor:'#3b3b3b',
    color: '#fff',
    '&:hover':{
      color: '#000', 
    }
  },
  profileJob: {
    margin: '0 15px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    paddingTop: '40px',
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: '40px',
    background: theme.palette.primary.main,
    color: '#fff',
    '&.svg':{
      fill: '#fff'
    }
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerIcon: {
    color: '#fff',
  },
}));

export default useStyles;
