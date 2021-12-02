import React from 'react';

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Input
} from '@mui/material';

import { grid, flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import { useButton } from '@mui/base/ButtonUnstyled';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function cartData(thumbnail, vehicle, price, days, cancel) {
  return { thumbnail, vehicle, price, days, cancel };
}

const rows = [];

export default function OrderList() {
  return (
    <div>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="car rental cart">
            <TableHead>
              <TableRow>
                <TableCell>Thumbnail</TableCell>
                <TableCell>Vehicle</TableCell>
                <TableCell>Price per Day</TableCell>
                <TableCell>Rental Days</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                {/* mapping from Home based on User Selection */}
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Input
                    required
                    placeholder="Numbers Only"
                    type={'number'}
                    min="1"
                  ></Input>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="error">
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          color="success"
          endIcon={<ShoppingCartIcon />}
        >
          Checkout
        </Button>
      </Box>
    </div>
  );
}
