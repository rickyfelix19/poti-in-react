import React, { useState, Component } from 'react';
import { Alert, AlertTitle, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function NotificationBox() {
  const [isNotified, setIsNotified] = useState(true);

  return (
    <div>
      <div>
        {/* Success */}
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
      </div>

      <div>
        {/* Warning */}
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
                severity="caution"
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Missing Information</AlertTitle>
          </Alert>
        </Box>
      </div>

      <div>
        {/* Error Box */}
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
                severity="error"
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Error</AlertTitle>
          </Alert>
        </Box>
      </div>
    </div>
  );
}
