import React from "react";
import { getCustomStyle } from "./../../../util";
import Box from "@material-ui/core/Box";
import logo from "./../../../assets/logo_sm.png";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = getCustomStyle({
    root_sm: {
      borderRadius: "50%",
      backgroundImage: `url(${logo})`,
      width: "90px",
      height: "90px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      position: "absolute",
      boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
      "&:hover": {
        boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
        cursor: "pointer",
      },
    },
    root: {
      borderRadius: "50%",
      backgroundImage: `url(${logo})`,
      width: "120px",
      height: "120px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      position: "absolute",
      boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
      "&:hover": {
        boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
        cursor: "pointer",
      },
    },
  })();

  const getHome = () => {
    history.push("/");
  };
  return (
    <Box>
      <Box
        onClick={getHome}
        classes={{
          root: matches ? classes.root : classes.root_sm, // class name, e.g. `classes-nesting-root-x`
        }}
      ></Box>
    </Box>
  );
};

export default Logo;
