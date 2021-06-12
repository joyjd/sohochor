import React from "react";
import Box from "@material-ui/core/Box";
import PhotoCollage from "./../PhotoCollage";
import Typography from "@material-ui/core/Typography";
import ElevatedButton from "./../ElevatedButton";
import "./style.scss";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const TimelineMaker = ({ light, media, url, type }) => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("md"));
  const handleNavigateDetails = (id) => {
    history.push(url + id);
  };
  const generateCard = (obj) => {
    return (
      <div className='content'>
        <Box boxShadow={2} p={2} borderRadius={6}>
          <PhotoCollage mediaId={obj.id} type={type} />

          <Typography component='h6' variant='h6' color='textSecondary'>
            <p>{obj.title} </p>
          </Typography>
          <Box mt={3} mb={2}>
            <ElevatedButton handleClickFunc={() => handleNavigateDetails(obj.id)} title={"Read Details"} />
          </Box>
        </Box>
      </div>
    );
  };
  const generatePaper = (obj) => {
    return (
      <div className='content'>
        <Box pb={4} className={clsx(matches ? "paperEffect" : "paperEffect_sm")}>
          <div className={matches ? "paperEffect-content" : "paperEffect-content_sm"}>
            <PhotoCollage mediaId={obj.id} type={type} />
            <Box>
              <Typography component='h6' variant='h6' color='textSecondary'>
                <p>{obj.title} </p>
              </Typography>
            </Box>
            <Box mt={3} mb={2} width={1} display='flex' justifyContent='center'>
              <ElevatedButton handleClickFunc={() => handleNavigateDetails(obj.id)} title={"Read More"} />
            </Box>
          </div>
        </Box>
      </div>
    );
  };

  console.log("timeline executed");

  return (
    <>
      <div className='timeline'>
        <ul>
          {media.map((obj, index) => (
            <li key={index}>
              {light ? generateCard(obj) : generatePaper(obj)}
              <div className='time'>
                <h4>{new Date(obj.eventDate).toDateString()}</h4>
              </div>
            </li>
          ))}

          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </>
  );
};

export default React.memo(TimelineMaker);
