import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import 'reactstrap';

// import { AppBar, Toolbar,Typography,Button,IconButton,MenuIcon,makeStyles} from '@material-ui/core';

import Header from './Header';
import Cart from './Cart';
import Form from './Form';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () => {
    const classes = useStyles();
    
    // Menu Box //
    
    // const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <AppBar position="fixed">
            <Toolbar>
                {/* <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" className={classes.title}>Hertz-UTS</Typography>
                <div>
                    <Button color="inherit">Cart <FaShoppingCart /> </Button>  
                </div>
            </Toolbar>
        </AppBar>
    )
}

// Navigation Pane - 
// if at HOME then URL === "/" and show only Cart
// if at CART then URL === "/cart" and show Submit
// if at SUBMIT then URL === "/form" and show HOME
// if user Submit Successful, then URL === "/complete" show HOME 

export default Navbar;