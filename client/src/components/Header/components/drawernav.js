import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import menu from '../../../assets/image/static/icon_menu.png'

const DrawerNavigate = ({ variant, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Drawer
          variant={variant}
          {...props}
          open={open}
          onClose={() => setOpen(false)}
        >
          <List>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>
                <Link style={{ textDecoration: "none" }} to="/">
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>
                <Link style={{ textDecoration: "none" }} to="/about">
                  About Us
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>
                <Link style={{ textDecoration: "none" }} to="/contact">
                  Contact Us
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Grid>

      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? <img src={menu} alt='menu' /> : <img src={menu} alt='menu' />} 
        </Button>
      </Grid>
    </Grid>
  );
};

export default DrawerNavigate;