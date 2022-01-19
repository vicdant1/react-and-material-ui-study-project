import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import CallIcon from "@material-ui/icons/Call";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ContentPasteIcon from "@material-ui/icons/Assessment";
import SupportIcon from "@material-ui/icons/ContactSupport";
import useStyles from "./navbarStyles";

const Navbar = () => {
  const classes = useStyles();
  const [mobileDrawer, setMobileDrawer] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMobileDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Costs</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="left"
        open={mobileDrawer}
        onOpen={() => {}}
        onClose={() => setMobileDrawer(false)}
      >
        <Box p={2}>
          <div
            className={classes.list}
            onClick={() => setMobileDrawer(false)}
            role="presentation"
          >
            <div className={classes.buttonContainer}>
              <IconButton className={classes.returnButton}>
                <ChevronLeftIcon fontSize="large" />
              </IconButton>
            </div>
            <List>
              <Link to="/">
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/company">
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <StoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Company" />
                </ListItem>
              </Link>
              <Link to="/support">
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <SupportIcon />
                  </ListItemIcon>
                  <ListItemText primary="Support" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/contact">
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <CallIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
              </Link>
              <Link to="/newproject">
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <CreateNewFolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Project" />
                </ListItem>
              </Link>
              <Link to="/projects">
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <ContentPasteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
