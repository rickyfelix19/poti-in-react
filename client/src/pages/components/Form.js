import React, { useState } from 'react';
import {
  Box,
  TextField,
  InputLabel,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Button,
  Typography
} from '@mui/material';

export default function Form() {
  const [formValues, setFormValues] = useState(defaultValues);

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postCode: '',
    payment: ''
  };

  return (
    <div>
      <Box>
        <form>
          <FormControl>
            <TextField
              label="First Name"
              variant="filled"
              required
              value="{firstName}"
              type="text"
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value="{lastName}"
              type="text"
            />
            <TextField
              label="Email Address"
              variant="filled"
              placeholder="something@email.com"
              required
              value="{email}"
              type="email"
            />
            <TextField
              label="Address Line 1"
              variant="filled"
              required
              value="{address1}"
              type="text"
            />
            <TextField
              label="Address Line 1"
              variant="filled"
              value="{address1}"
              type="text"
            />
            <TextField
              label="City"
              variant="filled"
              required
              value="{city}"
              type="text"
            />
            <InputLabel>State</InputLabel>
            <Select required value="{state}" label="State">
              <MenuItem>Australia Capital Territory</MenuItem>
              <MenuItem>New South Wales</MenuItem>
              <MenuItem>Northern Territory</MenuItem>
              <MenuItem>Queensland</MenuItem>
              <MenuItem>South Australia</MenuItem>
              <MenuItem>Tasmania</MenuItem>
              <MenuItem>Victoria</MenuItem>
              <MenuItem>Western Australia</MenuItem>
              <MenuItem>New Zealand</MenuItem>
              <MenuItem>Outside of Australia & New Zealand</MenuItem>
            </Select>
            <TextField
              label="Post Code"
              variant="filled"
              required
              value="{postCode}"
              type="number"
            />
            <InputLabel>Payment Type</InputLabel>
            <Select required value="{payment}" label="Payment">
              <MenuItem>PayPal</MenuItem>
              <MenuItem>Credit Card</MenuItem>
            </Select>
          </FormControl>

          <div>
            <Typography>
              <h3>You are required to pay $(amount)</h3>
            </Typography>

            <Button color="secondary" variant="outlined">
              <input type="text" value="Back" />
            </Button>

            <Button color="primary" variant="filled">
              <input type="submit" value="Make Payment" />
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}
