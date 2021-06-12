import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { getCustomStyle } from "./../../../util";
import { NavLink } from "react-router-dom";
import blueGrey from "@material-ui/core/colors/blueGrey";
import orange from "@material-ui/core/colors/orange";
const navLinks = [
  /*  { title: `about us`, path: `/About` }, */
  { title: `Our Activities`, path: `/Activities` },
  { title: `Reunions`, path: `/Reunions` },
  { title: `Gallery`, path: `/Gallery` },
  { title: `Archives`, path: `/Archives` },
  { title: `Blog`, path: `/Blog` },
];

const DesktopMenu = () => {
  const primary = blueGrey[800]; // #f44336
  const secondary = orange[800];
  const classes = getCustomStyle({
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`,
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`,
      padding: 0,
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
    activeLink: {
      color: secondary,
    },
  })();
  return (
    <List component='nav' aria-labelledby='main navigation' className={classes.navDisplayFlex}>
      {navLinks.map(({ title, path }) => (
        <NavLink className={classes.linkText} activeClassName={classes.activeLink} to={path} key={title}>
          <ListItem button>
            <ListItemText primary={title} disableTypography={true} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default React.memo(DesktopMenu);
