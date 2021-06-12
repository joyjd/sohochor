import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import PageTitleHolder from "./../PageTitleHolder";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Highlightbox from "./..//HighlightBox";
import MediaCaraousel from "./../MediaCaraousel";
import CardContent from "@material-ui/core/CardContent";

const DetailPage = ({ date, title, desc, media, highlightDesc, stardisplayMedia }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const generateText = (desc) => {
    return (
      <Typography color='textSecondary' component='p' gutterBottom>
        {desc}
      </Typography>
    );
  };

  const generateStarImg = (stardisplayMedia) => {
    return (
      <>
        {stardisplayMedia.map((obj, index) => (
          <Box key={index} p={2} boxShadow={3} className='picFrame'>
            <Card>
              <CardMedia component='img' className='starImg' image={obj.url} title={obj.desc} />

              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {obj.desc}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </>
    );
  };
  return (
    <>
      <PageTitleHolder headerText={title} subheader={true} subheaderText={date} />
      <Box mt={4} style={{ position: "relative", zIndex: 1 }}>
        <Container disableGutters={true}>
          <MediaCaraousel mediaObj={media} />
        </Container>
      </Box>
      <Container disableGutters={matches}>
        <Box mt={4} mb={6} p={matches ? 6 : 2} className='insetBox'>
          {generateText(desc)}
          {generateStarImg(stardisplayMedia)}
        </Box>
        <Box mb={6}>
          <Container>
            <Highlightbox desc={highlightDesc} />
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default DetailPage;
