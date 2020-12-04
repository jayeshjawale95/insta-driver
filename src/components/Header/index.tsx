import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { Home, Menu, Mail, MoveToInbox } from "@material-ui/icons";
import useStyles from "./style";

const Header = (props: any) => {
  const classes = useStyles();
  const { setOpen, open } = props;
  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* TODO: Add image here */}
            <Home />
            <Typography variant="h6" className={classes.title}>
              InstaDriver
            </Typography>
          </IconButton>
          <Grid
            className={classes.menuButtonItems}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <Button variant="contained" color="default">
                Get Job
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="default">
                Get Social
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="inherit"
                className={classes.profileBtn}
              >
                James Keem
              </Button>
            </Grid>
          </Grid>
          <Button onClick={() => setOpen(!open)}>
            Menu <Menu />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
