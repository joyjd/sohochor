import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import PageTitleHolder from "./../../../components/PageTitleHolder";
import SkewImageSet from "./../../../components/SkewImageSet";

const Intro = ({ imgList }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("md"));
  const generateText = () => {
    return (
      <Typography color='textSecondary' gutterBottom>
        At Sohochor, we meet once in every two years and try to revive our golden memories together over a day of togetherness.Catch a glimpse of the colorful moments of our reunion gatherings till so far.
      </Typography>
    );
  };
  return (
    <Box>
      <div className={matches ? "quoteImg" : "quote"}>
        <SkewImageSet mediaObj={imgList} />
      </div>
      <PageTitleHolder headerText={"Reunions"} descText={generateText()} />
    </Box>
  );
};

export default Intro;
