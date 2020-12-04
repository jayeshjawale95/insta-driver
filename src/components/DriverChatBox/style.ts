import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  newChat: {
    backgroundColor: '#FFBB00',
    float: 'right',
    marginBottom: theme.spacing(3),
    textTransform: 'none',
    color: '#fff',
  },
  chatWrapperbox: {
    background: '#fff',
    borderRadius: '15px'
  },
  chatWrapper: {
    borderRadius: '15px',
    border: '1px solid #C4C4C4',
  },
  chatHeader: {
    background: '#E8F5F9',
    borderRadius: '15px 15px 0 0',
    borderBottom: '1px solid #C4C4C4',
  },
  avatar: {
    textAlign: 'center',
    width: '120px',
    marginTop: '-40px',
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
  contactInfoBtn: {
    backgroundColor: '#6B6565',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      color: '#000',
    },
  },
  chatId: {
    position: 'relative',
    textAlign: 'right',
  },
  chatIdNumber: {
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
  chatTimeYou: {
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
