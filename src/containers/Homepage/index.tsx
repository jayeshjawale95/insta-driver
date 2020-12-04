import React from "react";
import { connect } from "react-redux";
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
import SearchIcon from '@material-ui/icons/Search';
import { AppDispatch } from "../../store";
import { HomepageProps } from "./Homepage.interface";
import { fetchDriversDataRequest, fetchDriverChatDataRequest } from "./reducer";
import useStyles from "./style";
import { MoreVert, Add, Info } from "@material-ui/icons";
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import Avtar from '../../assets/Avtar.png';
import FilterIcon from '../../assets/FilterIcon.svg';
import seenIcon from '../../assets/seenIcon.svg';
import unseenIcon from '../../assets/unseenIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';



const Homepage = (props: HomepageProps) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={3}
    >
      <Grid item md={6}>
        <Box className={classes.headerSearch}>
          <form
            noValidate
            autoComplete="off"
            className={classes.searchWrapper}
          >
            <Button
              variant="contained"
              className={classes.searchButton}
              size="large"
              startIcon={<SearchIcon />}
            >
            </Button>
            <Input
              className={classes.searchInput}
              placeholder="Search users, messages or chat id’s"
              inputProps={{ 'aria-label': 'description' }}
            />
          </form>
          <Button>
            <img src={FilterIcon} className={classes.filterIcon} alt="" />
          </Button>
        </Box>

        <Box className={classes.userCardwrapper}>


          <Box className={classes.userCard} >
            <Grid container spacing={3} >
              <Box className={classes.userCardid} > Chat ID: 3362Gd2</Box>
              <Grid xs={3}>
                <div className={classes.userAvatar}>
                  <Avatar className={classes.avatarImg} src={Avtar} aria-label="recipe"> R </Avatar>
                  <Box className={classes.avatarName}> Shirly Cook</Box>
                  <Box className={classes.avatarID}> @JohntheD </Box>
                </div>
              </Grid>
              <Grid xs={9}>
                <Typography variant="h6" > Inquiry about reloca....</Typography>
                <Typography> Vacancy ads help you attract potential hires who are.....</Typography>
              </Grid>
              <Box className={classes.userCardtime} > 11:00 a.m </Box>
              <Box className={classes.userCardnumber} > 4 </Box>
            </Grid>
          </Box>

          <Box className={classes.userCardgray} >
            <Grid container spacing={3} >
              <Box className={classes.userCardid} > Chat ID: 3362Gd2</Box>
              <Grid xs={3}>
                <div className={classes.userAvatar}>
                  <Avatar className={classes.avatarImg} src={Avtar} aria-label="recipe"> R </Avatar>
                  <Box className={classes.avatarName}> Shirly Cook</Box>
                  <Box className={classes.avatarID}> @JohntheD </Box>
                </div>
              </Grid>
              <Grid xs={9}>
                <Typography variant="h6" > Inquiry about reloca....</Typography>
                <Typography> Vacancy ads help you attract potential hires who are.....</Typography>
              </Grid>
              <Box className={classes.userCardtime} > 11:00 a.m </Box>
              <Box className={classes.userCardnumber} > 4 </Box>
            </Grid>
          </Box>

          <Box className={classes.userCardgray} >
            <Grid container spacing={3} >
              <Box className={classes.userCardid} > Chat ID: 3362Gd2</Box>
              <Grid xs={3}>
                <div className={classes.userAvatar}>
                  <Avatar className={classes.avatarImg} src={Avtar} aria-label="recipe"> R </Avatar>
                  <Box className={classes.avatarName}> Shirly Cook</Box>
                  <Box className={classes.avatarID}> @JohntheD </Box>
                </div>
              </Grid>
              <Grid xs={9}>
                <Typography variant="h6" > Inquiry about reloca....</Typography>
                <Typography> Vacancy ads help you attract potential hires who are.....</Typography>
              </Grid>
              <Box className={classes.userCardtime} > 11:00 a.m </Box>
              <Box className={classes.userCardnumber} > 4 </Box>
            </Grid>
          </Box>

          <Box className={classes.userCardgray} >
            <Grid container spacing={3} >
              <Box className={classes.userCardid} > Chat ID: 3362Gd2</Box>
              <Grid xs={3}>
                <div className={classes.userAvatar}>
                  <Avatar className={classes.avatarImg} src={Avtar} aria-label="recipe"> R </Avatar>
                  <Box className={classes.avatarName}> Shirly Cook</Box>
                  <Box className={classes.avatarID}> @JohntheD </Box>
                </div>
              </Grid>
              <Grid xs={9}>
                <Typography variant="h6" > Inquiry about reloca....</Typography>
                <Typography> Vacancy ads help you attract potential hires who are.....</Typography>
              </Grid>
              <Box className={classes.userCardtime} > 11:00 a.m </Box>
              <Box className={classes.userCardnumber} > 4 </Box>
            </Grid>
          </Box>

        </Box>

      </Grid>
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
                <Typography className={classes.chatIdnumber} > Chat ID: 3362Gd2 </Typography>
              </CardContent>

              <Box className={classes.chatWrappermessage} >

                <CardContent>
                  <Typography className={classes.chatBluebox} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Typography>
                  <Typography className={classes.charTimeyou}> 11:00 a.m. </Typography>
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
                  <Typography className={classes.charTimeyou}> 11:00 a.m. </Typography>
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
                  fullWidth
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
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  const { isLoading, driversError, driversChatError } = state.homePage;
  return {
    isLoading,
    driversError,
    driversChatError,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchDriversData: () => dispatch(fetchDriversDataRequest()),
    fetchDriverChatData: () => dispatch(fetchDriverChatDataRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
