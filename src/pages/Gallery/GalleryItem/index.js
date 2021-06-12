/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import CardMedia from "@material-ui/core/CardMedia";
const GalleryItem = ({ temp, url }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <a onClick={() => handleOpen()} className='gallery__link' key={temp}>
        <Box className='gallery__thumb'>
          <img src={url} alt='Portrait by Jessica Felicio' className='gallery__image' />
        </Box>
      </a>
      <Dialog fullWidth={open} maxWidth='sm' open={open} onClose={handleClose} aria-labelledby='max-width-dialog-title'>
        <Box display='flex' justifyContent='flex-end'>
          <IconButton aria-label='delete' onClick={() => handleClose()}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Box display='flex' flexDirection='column' p={1}>
          <CardMedia component='img' image={url} title='' />
        </Box>
      </Dialog>
    </>
  );
};

export default GalleryItem;
