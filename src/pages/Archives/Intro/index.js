import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import PageTitleHolder from "./../../../components/PageTitleHolder";
import SkewOverlapImageSet from "./../../../components/SkewOverlapImageSet";

const Intro = ({ imageList }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("md"));
  const generateText = () => {
    return (
      <Typography color='textSecondary' gutterBottom>
        An enormous rich scrapbook of memories of all members of Sohochor group since the blooming days at Ramakrishna Mission, Narendrapur. Dont give it a miss !
      </Typography>
    );
  };
  return (
    <Box>
      <div className={matches ? "quoteImg" : "quote"}>
        <SkewOverlapImageSet dark={true} imageList={imageList} />
      </div>
      <PageTitleHolder headerText={"Archives"} descText={generateText()} />
    </Box>
  );
};

export default Intro;
