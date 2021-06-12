import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineMaker from "./../../../components/TimelineMaker";
import DataSubmitForm from "./../../../modules/DataSubmitForm";

const Content = ({ activityList }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box mt={matches ? 3 : 2} width={1} height={1} className={matches ? "relativeDiv" : ""}>
      {activityList.length !== 0 ? <TimelineMaker light={true} media={activityList} url='/Activities/ActivityDetails/' type='Activities' /> : null}
      <Box mt={4} p={5}>
        <DataSubmitForm type='Activities' />
      </Box>
    </Box>
  );
};

export default React.memo(Content);
