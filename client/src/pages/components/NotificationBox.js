import React, { useState, Component } from 'react';
import { Alert, AlertTitle, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function NotificationBox() {
  const [isNotified, setIsNotified] = useState(true);

  return (
    <Box>
      <Alert
        
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setIsNotified(false);
            }}
            severity="success"
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Success</AlertTitle>
      </Alert>
    </Box>
  );
}
