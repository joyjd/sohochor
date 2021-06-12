import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SkewImageSet from "./../../../components/SkewImageSet";
import Typography from "@material-ui/core/Typography";
import PageTitleHolder from "./../../../components/PageTitleHolder";

const Intro = ({ imgList }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const generateText = () => {
    return (
      <Typography color='textSecondary' gutterBottom>
        At Sohochor, based on the principles of the great monk of modern India,Swami Vivekananda, we believe in the power of giving. Hence, we contribute and try to build our society in the times of need as well as host events for the better need. Catch a glimpse of all our activities till so far.
      </Typography>
    );
  };

  return (
    <Box>
      <div className={matches ? "quoteImg" : "quote"}>
        <SkewImageSet mediaObj={imgList} />
      </div>
      <PageTitleHolder headerText={"Our Activities"} descText={generateText()} />
    </Box>
  );
};

export default React.memo(Intro);
