import React, { useState, useEffect, useCallback } from "react";
import Box from "@material-ui/core/Box";
import "./style.scss";
import { getCustomStyle } from "./../../util";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import CardMedia from "@material-ui/core/CardMedia";
import { getActivitySpecificImages, getReunionSpecificImages } from "./../../firebase/firebaseService";

const PhotoCollage = ({ mediaId, type }) => {
  const [imgList, setImgList] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("md"));
  const classes = getCustomStyle({
    cover: {
      height: "16rem",
      width: "100%",
    },
    cover_md: {
      height: "8rem",
      width: "100%",
    },
    cover_sm: {
      height: "8rem",
      width: "100%",
    },
    sepia: {
      filter: "sepia(100%)",
    },
    gray: {
      filter: "grayscale(100%)",
    },
  })();

  const fillImages = (data) => {
    let i = 0;
    while (data.length !== 5) {
      data.push(data[i]);
      ++i;
    }
  };

  const getImages = useCallback(async () => {
    const temp = [];
    const img = type === "Activities" ? await getActivitySpecificImages(mediaId, 5) : await getReunionSpecificImages(mediaId, 5);
    img.forEach((doc) => {
      temp.push(doc.data());
    });
    if (temp.length < 5) {
      fillImages(temp);
    }
    setImgList(temp);
  }, []);

  useEffect(() => getImages(), []);
  const [img1, img2, img3, img4, img5] = imgList;
  return imgList.length !== 0 ? (
    <Box width={1} boxShadow={6} padding={1} style={{ position: "relative" }}>
      <Box display='flex' flexDirection='row'>
        <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)} image={img1.url} title='' />
        <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)} image={img2.url} title='' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)} image={img3.url} title='' />
        <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)} image={img4.url} title='' />
      </Box>
      <div className={matches2 ? "overlapImage" : "overlapImage_md"}>
        <Box boxShadow={6} padding={1}>
          <CardMedia className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)} image={img5.url} title='' />
        </Box>
      </div>
    </Box>
  ) : null;
};

export default React.memo(PhotoCollage);
