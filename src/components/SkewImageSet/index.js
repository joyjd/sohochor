import React from "react";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import "./style.scss";
import { getCustomStyle } from "./../../util";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

const SkewImageSet = ({ mediaObj }) => {
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
  })();
  return (
    <>
      <div className='container'>
        {mediaObj.map((obj, index) =>
          obj.type === "image" ? (
            <div key={index} className='box'>
              <CardMedia component='img' className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)} image={obj.url} title='' />
            </div>
          ) : (
            <div key={index} className='box'>
              <Box width={1} height={1} className={clsx(matches ? (matches2 ? classes.cover : classes.cover_md) : classes.cover_sm)}>
                <video loop={true} autoPlay='autoplay' muted playsInline className='skewVideo'>
                  <source src={obj.url} type='video/mp4'></source>
                </video>
              </Box>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SkewImageSet;
