import React from "react";
import Typography from "@material-ui/core/Typography";
import { getCustomStyle } from "./../../util";
import blueGrey from "@material-ui/core/colors/blueGrey";
import "./style.scss";
const DetailTitle = ({ title, size, subtitle }) => {
  const primary = blueGrey[700]; // #f44336
  const secondary = blueGrey[400];
  const classes = getCustomStyle({
    root_primary: {
      color: primary,
      position: "relative",
      overflow: "hidden",
    },
    root_sec: {
      color: secondary,
      position: "relative",
      overflow: "hidden",
    },
  })();

  return (
    <Typography
      classes={{
        root: subtitle === undefined ? classes.root_primary : classes.root_sec, // class name, e.g. `classes-nesting-root-x`
      }}
      variant={size}
    >
      {title}
    </Typography>
  );
};

export default DetailTitle;
