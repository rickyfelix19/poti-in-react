import React from 'react';
import { makeStyles } from '@mui/core/styles';
import { Typography, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500
  }
}));

const Footer = () => {
  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'rgb(63, 81, 181)',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%'
      }}
    >
      <Typography component="div" style={{ color: 'white' }}>
        <Box textAlign="center" m={1}>
          &copy; UTS-Hertz, 2021
        </Box>
      </Typography>
    </div>
  );
};

export default Footer;
