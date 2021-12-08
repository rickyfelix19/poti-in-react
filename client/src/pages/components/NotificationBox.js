import React from 'react';
import PropTypes from 'propTypes';

import { Alert, AlertTitle, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const NotificationBox = ({
  isNotified,
  closeNotified,
  title,
  description,
  colorNotif
}) => {
  // const [isNotified, setIsNotified] = useState(true);
  // severity: success, error, caution

  return (
    <>
      <div>
        {/* Success */}
        <Box>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={isNotified}
                onClose={closeNotified}
                severity={colorNotif}
              >
                <CloseIcon fontSize="inherit" onClose={closeNotified} />
              </IconButton>
            }
            sx={{ mb: 2 }}
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
  isNotified: PropTypes.bool.isRequired,
  closeNotified: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorNotif: PropTypes.string.isRequired
};
