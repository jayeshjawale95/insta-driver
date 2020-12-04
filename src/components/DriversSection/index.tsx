import React from "react";
import useStyles from "./style";
import {
  Avatar,
  Button,
  Grid,
  Input,
  Box,
  Typography,
} from "@material-ui/core";
import Avtar from '../../assets/Avtar.png';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '../../assets/FilterIcon.svg';

const DriversSection = () => {
  const classes = useStyles();
  return (
    <Grid item md={6}>
      <Box className={classes.headerSearch}>
        <form noValidate autoComplete="off" className={classes.searchWrapper}>
          <Button
            variant="contained"
            className={classes.searchButton}
            size="large"
            startIcon={<SearchIcon />}
          ></Button>
          <Input
            className={classes.searchInput}
            placeholder="Search users, messages or chat id’s"
            inputProps={{ "aria-label": "description" }}
          />
        </form>
        <Button>
          <img src={FilterIcon} className={classes.filterIcon} alt="" />
        </Button>
      </Box>

      <Box className={classes.userCardwrapper}>
        <Box className={classes.userCard}>
          <Grid container spacing={3}>
            <Box className={classes.userCardid}> Chat ID: 3362Gd2</Box>
            <Grid xs={3}>
              <div className={classes.userAvatar}>
                <Avatar
                  className={classes.avatarImg}
                  src={Avtar}
                  aria-label="recipe"
                >
                </Avatar>
                <Box className={classes.avatarName}> Shirly Cook</Box>
                <Box className={classes.avatarID}> @JohntheD </Box>
              </div>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6"> Inquiry about reloca....</Typography>
              <Typography>
                Vacancy ads help you attract potential hires who are.....
              </Typography>
            </Grid>
            <Box className={classes.userCardtime}> 11:00 a.m </Box>
            <Box className={classes.userCardnumber}> 4 </Box>
          </Grid>
        </Box>

        <Box className={classes.userCardgray}>
          <Grid container spacing={3}>
            <Box className={classes.userCardid}> Chat ID: 3362Gd2</Box>
            <Grid xs={3}>
              <div className={classes.userAvatar}>
                <Avatar
                  className={classes.avatarImg}
                  src={Avtar}
                  aria-label="recipe"
                >
                </Avatar>
                <Box className={classes.avatarName}> Shirly Cook</Box>
                <Box className={classes.avatarID}> @JohntheD </Box>
              </div>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6"> Inquiry about reloca....</Typography>
              <Typography>
                Vacancy ads help you attract potential hires who are.....
              </Typography>
            </Grid>
            <Box className={classes.userCardtime}> 11:00 a.m </Box>
            <Box className={classes.userCardnumber}> 4 </Box>
          </Grid>
        </Box>

        <Box className={classes.userCardgray}>
          <Grid container spacing={3}>
            <Box className={classes.userCardid}> Chat ID: 3362Gd2</Box>
            <Grid xs={3}>
              <div className={classes.userAvatar}>
                <Avatar
                  className={classes.avatarImg}
                  src={Avtar}
                  aria-label="recipe"
                >
                </Avatar>
                <Box className={classes.avatarName}> Shirly Cook</Box>
                <Box className={classes.avatarID}> @JohntheD </Box>
              </div>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6"> Inquiry about reloca....</Typography>
              <Typography>
                Vacancy ads help you attract potential hires who are.....
              </Typography>
            </Grid>
            <Box className={classes.userCardtime}> 11:00 a.m </Box>
            <Box className={classes.userCardnumber}> 4 </Box>
          </Grid>
        </Box>

        <Box className={classes.userCardgray}>
          <Grid container spacing={3}>
            <Box className={classes.userCardid}> Chat ID: 3362Gd2</Box>
            <Grid xs={3}>
              <div className={classes.userAvatar}>
                <Avatar
                  className={classes.avatarImg}
                  src={Avtar}
                  aria-label="recipe"
                >
                </Avatar>
                <Box className={classes.avatarName}> Shirly Cook</Box>
                <Box className={classes.avatarID}> @JohntheD </Box>
              </div>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6"> Inquiry about reloca....</Typography>
              <Typography>
                Vacancy ads help you attract potential hires who are.....
              </Typography>
            </Grid>
            <Box className={classes.userCardtime}> 11:00 a.m </Box>
            <Box className={classes.userCardnumber}> 4 </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default DriversSection;
