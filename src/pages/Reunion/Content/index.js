import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineMaker from "./../../../components/TimelineMaker";
import DataSubmitForm from "./../../../modules/DataSubmitForm";

const Content = ({ reunionList }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box mt={matches ? 3 : 2} width={1} height={1} className={matches ? "relativeDiv" : ""}>
      {reunionList.length !== 0 ? <TimelineMaker light={false} media={reunionList} url='/Reunions/ReunionDetails/' type='Reunions' /> : null}
      <Box mt={4} p={5}>
        <DataSubmitForm type='Reunions' />
      </Box>
    </Box>
  );
};

export default React.memo(Content);
