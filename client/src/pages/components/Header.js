import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: '15px'
  },
  title: {
    flexGrow: 1
  }
});

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon style={{ color: 'white' }} />
            </Button>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/home">
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem onClick={handleClose}>Cart</MenuItem>
            </Link>
            <Link to="/checkout">
              <MenuItem onClick={handleClose}>Checkout</MenuItem>
            </Link>
            <Link to="/success">
              <MenuItem onClick={handleClose}>Success</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            UTS-Hertz
          </Typography>
          <Button style={{ color: 'white' }}>
            Cart &nbsp;
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
