import React from "react";
import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Input,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";
import { MoreVert, Add, Info } from "@material-ui/icons";
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import Avtar from '../../assets/Avtar.png';
import seenIcon from '../../assets/seenIcon.svg';
import unseenIcon from '../../assets/unseenIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

const DriverChatBox = () => {
  const classes = useStyles();
  return (
    <Grid item md={6}>
        <Grid container>
          <Grid item md={12}>
            <Button
              variant="contained"
              className={classes.newChat}
              startIcon={<Add />}
            >
              Start a new chat
            </Button>
          </Grid>
          <Grid item md={12} className={classes.chatWrapperbox}>
            <Box className={classes.chatWrapper}>
              <CardHeader
                className={classes.chatHeader}
                avatar={
                  <div className={classes.avatar}>
                    <Avatar className={classes.avatarImg} src={Avtar} aria-label="recipe"> R </Avatar>
                    <Box className={classes.avatarName}> Shirly Cook</Box>
                    <Box className={classes.avatarID}> @JohntheD </Box>
                  </div>
                }
                action={
                  <div>
                    <Button
                      variant="contained"
                      className={classes.contactInfoBtn}
                      startIcon={<Info />}
                    >
                      Contact info
                    </Button>
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  </div>
                }
                title="Inquiry about relocation from Nairobi"
              />
              <CardMedia
                image="/static/images/cards/paella.jpg"
                title="Paella dish"

              />
              <CardContent className={classes.chatId} >
                <Typography className={classes.chatIdNumber} > Chat ID: 3362Gd2 </Typography>
              </CardContent>

              <Box className={classes.chatWrappermessage} >

                <CardContent>
                  <Typography className={classes.chatBluebox} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Typography>
                  <Typography className={classes.chatTimeYou}> 11:00 a.m. </Typography>
                </CardContent>

                <CardContent>
                  <Typography className={classes.chatPinkbox} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                  <Typography className={classes.charTimeme}> 11:00 a.m. <img className={classes.seenIcon} src={seenIcon} alt="" /> </Typography>
                </CardContent>

                <CardContent>
                  <Typography className={classes.chatBluebox} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                  <Typography className={classes.chatTimeYou}> 11:00 a.m. </Typography>
                </CardContent>

                <CardContent>
                  <Typography className={classes.chatPinkbox} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                  <Typography className={classes.charTimeme}> 11:00 a.m. <img className={classes.seenIcon} src={unseenIcon} alt="" /> </Typography>
                </CardContent>


                <CardContent className={classes.chatPinkboxdelete} >
                  <Box>
                    <Typography className={classes.chatPinkbox} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                    <Typography className={classes.charTimeme}> 11:00 a.m. <img className={classes.seenIcon} src={unseenIcon} alt="" /> </Typography>
                  </Box>
                  <Box>
                    <img className={classes.chatPinkboxdeleteicon} src={deleteIcon} alt="" />
                  </Box>
                </CardContent>
              </Box>
              <Box className={classes.messageBox} >
                <Input
                  className={classes.messageInput}
                  placeholder="Type your message"
                  inputProps={{ 'aria-label': 'description' }}
                />

                <Box className={classes.buttonWrapper} >
                  <Grid container spacing={3}>
                    <Grid xs={6} >
                      <Button size="large" > <AttachmentIcon /> </Button>
                      <Button size="large" > <SentimentSatisfiedIcon /> </Button>
                      <Button size="large" > <MicIcon /> </Button>
                    </Grid>
                    <Grid xs={6} >
                      <Button color="primary" className={classes.sendButtonIcon} > <SendIcon /> </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default DriverChatBox;
