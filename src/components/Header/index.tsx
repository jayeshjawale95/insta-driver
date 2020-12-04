import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import StarsIcon from '@material-ui/icons/Stars';
import PaymentIcon from '@material-ui/icons/Payment';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

import useStyles from "./style";
import Instadriver from '../../assets/Instadriver.png';

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
            <img className={classes.instaDriver} src={Instadriver} alt="" />
          </IconButton>
          <Grid
            className={classes.menuButtonItems}
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Button variant="outlined" color="default" className={classes.profileJob}>
              Jobs
              </Button>
            <Button variant="outlined" color="default" className={classes.profileJob}>
              Get Social
              </Button>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.profileBtn}
            >
              James Keem
              </Button>
          </Grid>
          <Button onClick={() => setOpen(!open)}>
            Menu <Menu />
          </Button>
        </Toolbar>
        <Box className={classes.appBorder} > </Box>
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
            <ListItem button>
                <ListItemIcon>
                  <PermIdentityIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="Employer Profile" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <DriveEtaIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="Onboard Your Vehicles" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <SearchIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="Search Hire Drivers" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <MailOutlineIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <WorkOutlineIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="Recruitment" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <PictureInPictureAltIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="My Organisations" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <StarsIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="Rate A Driver" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                  <PaymentIcon className={classes.drawerIcon} />
                </ListItemIcon>
                <ListItemText primary="My Subscription" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
