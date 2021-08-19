import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: 500
  }
}));

export default function Footer() {
  return (
    <Typography component="div" style={{ color: 'white' }}>
      <Box textAlign="center" m={1}>
        &copy; UTS-Hertz, 2021
      </Box>
    </Typography>
  );
}
