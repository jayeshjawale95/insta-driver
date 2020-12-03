import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { AppDispatch } from '../../store';
import { HomepageProps } from './Homepage.interface';

const Homepage = (props: HomepageProps) => {
  // eslint-disable-next-line
  const {} = props;

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <p>
        homepage!
      </p>
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  const { isLoading } = state.homePage;
  return {
    isLoading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
