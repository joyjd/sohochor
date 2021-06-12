import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import { getCustomStyle } from "./../../../util";
import blueGrey from "@material-ui/core/colors/blueGrey";
import orange from "@material-ui/core/colors/orange";
import Divider from "@material-ui/core/Divider";
import FlashAutoIcon from "@material-ui/icons/FlashAuto";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TheatersIcon from "@material-ui/icons/Theaters";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
const navLinks = [
  /* { title: `about us`, path: `/About`, Icon: InfoIcon }, */
  { title: `Our Activities`, path: `/Activities`, Icon: FlashAutoIcon },
  { title: `Reunions`, path: `/Reunions`, Icon: SupervisedUserCircleIcon },
  { title: `Gallery`, path: `/Gallery`, Icon: PhotoLibraryIcon },
  { title: `Archives`, path: `/Archives`, Icon: TheatersIcon },
  { title: `Blog`, path: `/Blog`, Icon: BookIcon },
];

const MobileView = () => {
  const primary = blueGrey[800]; // #f44336
  const secondary = orange[800];
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenMenu(open);
  };
  const cls = getCustomStyle({
    root: {
      width: "60%",
    },
    drawer: {
      minWidth: "60%",
    },
    linkText: {
      textDecoration: `none`,
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "1rem",

      color: primary,
      "&:hover": {
        color: secondary,
      },
    },
    linkdiv: {
      paddingTop: "15px",
      paddingBottom: "15px",
    },
    activeLink: {
      color: secondary,
    },
  })();
  return (
    <Hidden mdUp>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleMenuOpen(!openMenu),
        }}
      >
        <MenuIcon style={{ color: "#ff8000" }} />
      </IconButton>
      <SwipeableDrawer
        classes={{
          root: cls.root, // class name, e.g. `classes-nesting-root-x`
          paper: cls.drawer,
        }}
        anchor='left'
        open={openMenu}
        onClose={handleMenuOpen(false)}
        onOpen={handleMenuOpen(true)}
      >
        <div>
          <List style={{ width: "100%" }} component='nav' aria-labelledby='main navigation'>
            {navLinks.map(({ title, path, Icon }) => (
              <NavLink className={cls.linkText} activeClassName={cls.activeLink} to={path} key={title}>
                <ListItem className={cls.linkdiv} button onClick={() => setOpenMenu(false)}>
                  <Icon />
                  <ListItemText style={{ paddingLeft: "10px" }} primary={title} disableTypography={true} />
                </ListItem>
                <Divider />
              </NavLink>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </Hidden>
  );
};

export default React.memo(MobileView);
