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
        At Sohochor, we have a group of talented minds where we write,sing,paint and do what not to make the world a better place!.Catch a glimpse of all.
      </Typography>
    );
  };

  return (
    <Box>
      <div className={matches ? "quoteImg" : "quote"}>
        <SkewImageSet mediaObj={imgList} />
      </div>
      <PageTitleHolder headerText={"Blogs"} descText={generateText()} />
    </Box>
  );
};

export default React.memo(Intro);
