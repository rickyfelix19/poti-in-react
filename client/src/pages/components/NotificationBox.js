import React from 'react';
import PropTypes from 'propTypes';

import { Alert, AlertTitle, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const NotificationBox = ({
  sentNotif,
  closeNotif,
  title,
  description,
  colorNotif
}) => {
  // const [isNotified, setIsNotified] = useState(true);
  // severity: success, error, caution

  return (
    <>
      <div>
        <Box>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={sentNotif}
                onClose={closeNotif}
                severity={colorNotif}
              >
                <CloseIcon fontSize="inherit" onClose={closeNotif} />
              </IconButton>
            }
            sx={{
              mb: 2,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex'
            }}
          >
            <AlertTitle>{title}</AlertTitle>
            {description}
          </Alert>
        </Box>
      </div>
    </>
  );
};

NotificationBox.propTypes = {
  sentNotif: PropTypes.bool.isRequired,
  closeNotif: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorNotif: PropTypes.string.isRequired
};
