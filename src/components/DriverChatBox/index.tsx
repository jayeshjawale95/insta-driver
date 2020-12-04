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
import AttachmentIcon from "@material-ui/icons/Attachment";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import Avtar from "../../assets/Avtar.png";
import seenIcon from "../../assets/seenIcon.svg";
import unseenIcon from "../../assets/unseenIcon.svg";
import MessagingData from "../../data/driver1_chat";
import {DriverChatModel} from "../../models/driverChat.interface";

const DriverChatBox = () => {
  const classes = useStyles();

  const renderChatFooter = () => {
    return (
      <Box className={classes.messageBox}>
        <Input
          className={classes.messageInput}
          placeholder="Type your message"
          inputProps={{ "aria-label": "description" }}
        />

        <Box className={classes.buttonWrapper}>
          <Grid container spacing={3}>
            <Grid xs={6}>
              <Button size="large">
                <AttachmentIcon />
              </Button>
              <Button size="large">
                <SentimentSatisfiedIcon />
              </Button>
              <Button size="large">
                <MicIcon />
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button color="primary" className={classes.sendButtonIcon}>
                <SendIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderChatHeader = () => {
    return (
      <div>
        <CardHeader
          className={classes.chatHeader}
          avatar={
            <div className={classes.avatar}>
              <Avatar
                className={classes.avatarImg}
                src={Avtar}
                aria-label="recipe"
              >
              </Avatar>
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
        <CardContent className={classes.chatId}>
          <Typography className={classes.chatIdNumber}>
            Chat ID: 3362Gd2
          </Typography>
        </CardContent>
      </div>
    );
  };

  const renderReceiverChat = (data: DriverChatModel) => {
    return (
      <CardContent>
        <Typography className={classes.chatBluebox}>
          {data.message}
        </Typography>
        <Typography className={classes.chatTimeYou}>
          {data.published_at}
        </Typography>
      </CardContent>
    );
  }

  const renderSenderChat = (data: DriverChatModel) => {
    return (
      <CardContent>
        <Typography className={classes.chatPinkbox}>
          {data.message}
        </Typography>
        <Typography className={classes.charTimeme}>
          {data.published_at}
          <img
            className={classes.seenIcon}
            src={data.seen ? seenIcon : unseenIcon}
            alt=""
          />
        </Typography>
      </CardContent>
    );
  }

  const currentLoggedInUser = () => {
    return "employer"
  }

  const renderMessagingSection = () => {
    return (
      <Box className={classes.chatWrappermessage}>
        {
          MessagingData.map((data) => {
            const item = data.from === currentLoggedInUser() ?
              renderSenderChat(data) :
              renderReceiverChat(data);
            return item;
          })
        }
      </Box>
    );
  }

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
            {renderChatHeader()}
            {renderMessagingSection()}
            {renderChatFooter()}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DriverChatBox;
