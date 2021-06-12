import React from "react";
import Typography from "@material-ui/core/Typography";
import { getCustomStyle } from "./../../util";
import blueGrey from "@material-ui/core/colors/blueGrey";
import orange from "@material-ui/core/colors/orange";

const PageTitle = ({ title, size }) => {
  const primary = blueGrey[700]; // #f44336
  const secondary = orange[50];
  const classes = getCustomStyle({
    root: {
      color: primary,
      position: "relative",
      overflow: "hidden",

      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        background: secondary,
        top: "40%",
        marginLeft: "1rem",
        height: "15px",
      },
    },
  })();

  return (
    <Typography
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
      }}
      variant={size}
    >
      {title}
    </Typography>
  );
};

export default PageTitle;
