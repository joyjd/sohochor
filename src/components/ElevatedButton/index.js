import React from "react";
import Button from "@material-ui/core/Button";
import { getCustomStyle } from "./../../util";
import blueGrey from "@material-ui/core/colors/blueGrey";
import orange from "@material-ui/core/colors/orange";

const ElevatedButton = ({ title, handleClickFunc, ...props }) => {
  const primary = blueGrey[500]; // #f44336
  const secondary = orange[800];
  const classes = getCustomStyle({
    root: {
      color: primary,
      fontWeight: "bold",
      fontSize: "1rem",
      background: "#e6e7ee",
      border: ".0625rem solid transparent",
      borderColor: "#D1D9E6",
      boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
      padding: "10px",
      "&:hover": {
        color: secondary,
        boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
      },
    },

    label: {
      textTransform: "capitalize",
    },
  })();
  return (
    <Button
      onClick={handleClickFunc}
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      {...props}
    >
      {title}
    </Button>
  );
};

export default ElevatedButton;
