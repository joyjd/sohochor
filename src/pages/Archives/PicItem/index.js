import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import CardMedia from "@material-ui/core/CardMedia";

const PicItem = ({ open, handleClose, url }) => {
  return (
    <Dialog fullWidth={open} maxWidth='sm' open={open} onClose={handleClose} aria-labelledby='max-width-dialog-title'>
      <Box display='flex' justifyContent='flex-end'>
        <IconButton aria-label='delete' onClick={() => handleClose()}>
          <CancelIcon />
        </IconButton>
      </Box>
      <Box display='flex' flexDirection='column' p={1}>
        <Box>
          <CardMedia component='img' image={url.url} title='Live from space album cover' />
        </Box>
        <Box p={1}>{url.memory} </Box>
      </Box>
    </Dialog>
  );
};

export default PicItem;
