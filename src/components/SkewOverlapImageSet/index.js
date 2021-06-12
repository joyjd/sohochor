import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import "./style.scss";
import { getCustomStyle } from "./../../util";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

const SkewOverlapImageSet = ({ dark, imageList }) => {
  const [images, setImages] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("md"));
  const classes = getCustomStyle({
    cover: {
      height: "40rem",
    },
    cover_md: {
      height: "20rem",
    },
    cover_sm: {
      height: "14rem",
    },
    sepia: {
      filter: "sepia(100%)",
    },
    gray: {
      filter: "grayscale(100%)",
    },

    cover_ht: {
      height: "12rem",
    },
    cover_ht_md: {
      height: "6rem",
    },
    cover_ht_sm: {
      height: "4rem",
    },
  })();

  const fillImages = () => {
    const tempImgArr = [...imageList];
    if (imageList.length < 9) {
      while (tempImgArr.length !== 9) {
        tempImgArr.push(tempImgArr[0]);
      }
    }
    setImages(tempImgArr);
  };

  useEffect(() => fillImages(), [imageList]);
  return images.length >= 9 ? (
    <>
      <div className='container'>
        <div className='box'>
          <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm, dark ? classes.gray : null)} image={images[0].url} title='' />
        </div>
        <div className='box'>
          <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm, dark ? classes.sepia : null)} image={images[1].url} title='' />
        </div>
        <div className='box'>
          <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm, dark ? classes.gray : null)} image={images[2].url} title='' />
        </div>
        <div className='box'>
          <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm, dark ? classes.sepia : null)} image={images[3].url} title='' />
        </div>
        <Box className='overlapImage_1' boxShadow={6} padding={1}>
          <CardMedia className={clsx(clsx(matches ? (matches2 ? classes.cover_ht : classes.cover_ht_md) : classes.cover_ht_sm), dark ? classes.gray : null)} image={images[4].url} title='' />
        </Box>
        <Box className='overlapImage_2' boxShadow={6} padding={1}>
          <CardMedia className={clsx(clsx(matches ? (matches2 ? classes.cover_ht : classes.cover_ht_md) : classes.cover_ht_sm), dark ? classes.sepia : null)} image={images[5].url} title='' />
        </Box>
        <Box className='overlapImage_4' boxShadow={6} padding={1}>
          <CardMedia className={clsx(clsx(matches ? (matches2 ? classes.cover_ht : classes.cover_ht_md) : classes.cover_ht_sm), dark ? classes.gray : null)} image={images[6].url} title='' />
        </Box>
        <Box className='overlapImage_3' boxShadow={6} padding={1}>
          <CardMedia className={clsx(clsx(matches ? (matches2 ? classes.cover_ht : classes.cover_ht_md) : classes.cover_ht_sm), dark ? classes.sepia : null)} image={images[7].url} title='' />
        </Box>
        <Box className='overlapImage_5' boxShadow={6} padding={1}>
          <CardMedia className={clsx(clsx(matches ? (matches2 ? classes.cover_ht : classes.cover_ht_md) : classes.cover_ht_sm), dark ? classes.gray : null)} image={images[8].url} title='' />
        </Box>
      </div>
    </>
  ) : null;
};

export default React.memo(SkewOverlapImageSet);
