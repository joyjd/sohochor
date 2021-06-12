import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MobileView from "./MobileVew";
import { getCustomStyle } from "./../../util";
import ElevatedButton from "./../../components/ElevatedButton";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import DesktopMenu from "./DesktopMenu";
import Hidden from "@material-ui/core/Hidden";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleNavigateDonation = () => {
    history.push("/Donation");
  };
  const cls = getCustomStyle({
    root: {
      background: "#e6e7ee",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  })();

  return (
    <AppBar
      classes={{
        root: cls.root, // class name, e.g. `classes-nesting-root-x`
      }}
    >
      <Toolbar>
        <MobileView />
        <Container maxWidth='lg'>
          <Box display='flex' justifyContent='space-between'>
            <Logo />
            <Hidden smDown>
              <DesktopMenu />
            </Hidden>

            <ElevatedButton handleClickFunc={() => handleNavigateDonation()} title={"Donate"} />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
