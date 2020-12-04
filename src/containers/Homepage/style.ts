import { cyan, yellow } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  chatHeader: {
    backgroundColor: cyan[100]
  },
  avatar: {
   margin: 'auto'
  },
  newChat:{
    backgroundColor: yellow[600],
    float: 'right',
    marginBottom: theme.spacing(3),
    textTransform: 'none',
  },
  contactInfoBtn:{
    backgroundColor:'#3b3b3b',
    color: '#fff',
    textTransform: 'none',
    '&:hover':{
      color: '#000', 
    }
  }
}));

export default useStyles;
