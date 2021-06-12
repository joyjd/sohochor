import React from "react";
import Box from "@material-ui/core/Box";
import "./style.scss";

const Highlightbox = ({ desc }) => {
  return (
    <Box boxShadow={3} borderRadius={6} p={2} className='htBox'>
      <Box className='boxHeader'>Highlights</Box>
      <Box>{desc}</Box>
    </Box>
  );
};

export default Highlightbox;
