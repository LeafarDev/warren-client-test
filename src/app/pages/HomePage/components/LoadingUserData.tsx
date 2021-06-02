import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

export function LoadingUserData(): JSX.Element {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <CircularProgress disableShrink/>

    </Grid>
  );
}
