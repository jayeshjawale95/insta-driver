import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { AppDispatch } from "../../store";
import { HomepageProps } from "./Homepage.interface";
import { fetchDriversDataRequest, fetchDriverChatDataRequest } from "./reducer";
import DriversSection from '../../components/DriversSection';
import DriverChatBox from '../../components/DriverChatBox';

const Homepage = (props: HomepageProps) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={3}
    >
      <DriversSection />
      <DriverChatBox />
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
