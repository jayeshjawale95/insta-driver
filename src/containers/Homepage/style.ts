import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  newChat: {
    backgroundColor: '#FFBB00',
    float: 'right',
    marginBottom: theme.spacing(3),
    textTransform: 'none',
    color: '#fff',
  },
  contactInfoBtn: {
    backgroundColor: '#6B6565',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      color: '#000',
    },
  },
  chatHeader: {
    background: '#E8F5F9',
    borderRadius: '15px 15px 0 0',
    borderBottom: '1px solid #C4C4C4',
  },
  chatWrapper: {
    borderRadius: '15px',
    border: '1px solid #C4C4C4',
  },
  chatWrapperbox: {
    background: '#fff',
    borderRadius: '15px'
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
  avatarImg: {
    width: '52px',
    height: '52px',
    margin: 'auto',
  },
  avatar: {
    textAlign: 'center',
    width: '120px',
    marginTop: '-40px',
  },
  userAvatar: {
    textAlign: 'center',
  },
  headerSearch: {
    textAlign: 'center',
    width: '100%',
    display: 'inline-flex',
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
  searchWrapper: {
    border: '1px solid #FFBB00',
    width: 'calc(100% - 80px)',
    borderRadius: '50px',
    background: '#FFFFFF',
  },
  filterIcon: {
    width: '36px',
  },
  chatId: {
    position: 'relative',
    textAlign: 'right',
  },
  chatIdnumber: {
    position: 'absolute',
    background: '#EFEBEB',
    padding: '6px 10px',
    right: '0',
    top: '0',
    borderRadius: '0 0 0 5px'
  },
  chatBluebox: {
    width: '80%',
    background: '#ECF2FA',
    padding: '20px',
    borderRadius: '15px 15px 15px 0'
  },
  chatWrappermessage: {
    padding: '30px',
    overflowY: 'auto',
    maxHeight: '50vh',
  },
  charTimeyou: {
    color: '#C4C4C4',
    padding: '5px',
  },
  chatPinkbox: {
    width: '80%',
    background: '#FCF2F7',
    padding: '20px',
    borderRadius: '15px 15px 0 15px',
    marginLeft: 'auto',
  },
  charTimeme: {
    color: '#C4C4C4',
    padding: '5px',
    textAlign: 'right',
  },
  seenIcon: {
    verticalAlign: 'middle',
    width: '24px',
  },
  chatPinkboxdelete: {
    display: 'flex',
  },
  chatPinkboxdeleteicon: {
    width: '24px',
    marginTop: '100%',
    marginLeft: '10px',
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
  userCardgray: {
    padding: '40px 20px',
    background: '#F9F8F8',
    borderRadius: '6px',
    position: 'relative',
    border: '1px solid #C4C4C4',
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
  messageBox: {
    borderRadius: '15px',
    border: '1px solid #FFBB00'
  },
  messageInput: {
    padding: '6px 10px',
    margin: '15px ',
    '&::before': {
      borderBottom: 'none !important',
    },
    '&::after': {
      borderBottom: 'none !important',
    },
  },
  buttonWrapper: {
    background: '#F9F8F8',
    padding: '20px 30px',
    borderRadius: '0 0 15px 15px'
  },
  sendButtonIcon: {
    background: '#FFBB00',
    color: '#fff',
    float: 'right',
    '&:hover': {
      background: '#914A9C',
    },
  },
}));

export default useStyles;
