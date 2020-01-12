import React, { Component } from "react";
import './navbar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'



 
class NavBar extends Component {
  render() {
    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
            News
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    );
  }
}
 
export default NavBar;