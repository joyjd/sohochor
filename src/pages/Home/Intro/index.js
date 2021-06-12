import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./style.scss";

const Intro = () => {
  const generateText = () => {
    return (
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          We are an alumni batch of Ramakrishna Mission Narendrapur (2005 Madhyamik passout batch) who in the name of SOHOCHOR as a group indulge in various constructive activities in the society in a non profitable manner. We are a group of similar minded people who believes in the power of giving away for the better good and love to serve humanity.
        </Typography>
      </CardContent>
    );
  };
  return (
    <Box>
      <div className='quote'>
        <video loop={true} autoPlay='autoplay' muted playsInline id='introVideo'>
          <source src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' type='video/mp4'></source>
        </video>
      </div>
      <Box display={{ xs: "block", sm: "none", md: "none", lg: "none", xl: "none" }}>
        <div className='introCard upMargin_xs'>
          <Box boxShadow={6} width={7 / 8} display={{ xs: "block", md: "none" }}>
            <Card>
              <Box p={2}>{generateText()}</Box>
            </Card>
          </Box>
        </div>
      </Box>
      <Box display={{ xs: "none", sm: "block", md: "none", lg: "none", xl: "none" }}>
        <div className='introCard upMargin_sm'>
          <Box boxShadow={6} width={7 / 8} display={{ xs: "block", md: "none" }}>
            <Card>
              <Box p={2}>{generateText()}</Box>
            </Card>
          </Box>
        </div>
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block", lg: "none", xl: "none" }}>
        <div className='introCard upMargin_md'>
          <Box boxShadow={6} width={1 / 2} display={{ xs: "none", md: "block" }}>
            <Card>
              <Box p={8}>{generateText()}</Box>
            </Card>
          </Box>
        </div>
      </Box>

      <Box display={{ xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }}>
        <div className='introCard upMargin_lg'>
          <Box boxShadow={6} width={1 / 2} display={{ xs: "none", md: "block" }}>
            <Card>
              <Box p={8}>{generateText()}</Box>
            </Card>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default React.memo(Intro);
