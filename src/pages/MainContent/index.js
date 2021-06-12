import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import PrivateRoutes from "../../modules/Routes/PrivateRoutes";

const MainContent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container maxWidth='xl' disableGutters={!matches}>
      <Box mt={9}>
        <PrivateRoutes />
      </Box>
    </Container>
  );
};

export default MainContent;
