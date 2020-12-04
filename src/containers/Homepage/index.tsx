import React from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@material-ui/core";
import { AppDispatch } from "../../store";
import { HomepageProps } from "./Homepage.interface";
import { fetchDriversDataRequest, fetchDriverChatDataRequest } from "./reducer";
import useStyles from "./style";
import { MoreVert, Add } from "@material-ui/icons";

const Homepage = (props: HomepageProps) => {
  const {
    driversError,
    driversChatError,
    fetchDriversData,
    fetchDriverChatData,
  } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      // alignItems="center"
      spacing={2}
    >
      <Grid item md={6}>
        <TextField
          fullWidth
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
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
          <Grid item md={12}>
            <Card>
              <CardHeader
                className={classes.chatHeader}
                avatar={
                  <div className={classes.avatar}>
                    <Avatar aria-label="recipe">R</Avatar>
                    <div> User name</div>
                    <div> User email</div>
                  </div>
                }
                action={
                  <div>
                    <Button
                      variant="contained"
                      className={classes.contactInfoBtn}
                    >
                      Contact info
                    </Button>
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  </div>
                }
                title="Title"
              />
              <CardMedia
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Card>
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
