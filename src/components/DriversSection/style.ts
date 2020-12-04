import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  headerSearch: {
    textAlign: 'center',
    width: '100%',
    display: 'inline-flex',
  },
  searchWrapper: {
    border: '1px solid #FFBB00',
    width: 'calc(100% - 80px)',
    borderRadius: '50px',
    background: '#FFFFFF',
  },
  searchButton: {
    borderRadius: '50px',
    minWidth: '30px',
    padding: '10px',
    marginTop: '2px',
    boxShadow: 'none',
    position: 'absolute',
    background: 'none'
  },
  searchInput: {
    padding: '6px 10px',
    width: '90%',
    marginLeft: '32px',
    '&::before': {
      borderBottom: 'none !important',
    },
    '&::after': {
      borderBottom: 'none !important',
    },
  },
  filterIcon: {
    width: '36px',
  },
  userCardwrapper: {
    marginTop: '20px',
    padding: '30px',
    borderRadius: '6px 6px 0 0',
    background: '#fff',
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  userCard: {
    padding: '40px 20px',
    background: '#E8F5F9',
    borderRadius: '6px',
    position: 'relative',
    border: '1px solid #FFBB00',
    marginBottom: '30px',
  },
  userCardid: {
    background: '#EFEBEB',
    position: 'absolute',
    padding: '6px',
    borderRadius: '0 6px 0 6px',
    right: '0',
    top: '0',
  },
  userAvatar: {
    textAlign: 'center',
  },
  avatarImg: {
    width: '52px',
    height: '52px',
    margin: 'auto',
  },
  avatarName: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  avatarID: {
    marginTop: '5px',
    color: '#999',
  },
  userCardtime: {
    position: 'absolute',
    bottom: '15px',
    right: '30px',
    color: '#279F2C',
  },
  userCardnumber: {
    position: 'absolute',
    bottom: '-18px',
    right: '-18px',
    background: '#279F2C',
    borderRadius: '50px',
    width: '42px',
    height: '42px',
    textAlign: 'center',
    lineHeight: '42px',
    color: '#fff',
  },
  userCardgray: {
    padding: '40px 20px',
    background: '#F9F8F8',
    borderRadius: '6px',
    position: 'relative',
    border: '1px solid #C4C4C4',
    marginBottom: '30px',
  },
}));

export default useStyles;
