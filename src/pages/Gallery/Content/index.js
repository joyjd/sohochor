/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useCallback } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./style.scss";
import GalleryItem from "./../GalleryItem";
import Uploader from "./../Uploader";

const Content = ({ imageList }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const col = 4;
  let photoIndex = 0;
  const getImage = (temp) => {
    return <GalleryItem temp={temp} url={imageList[temp].url} key={temp} />;
  };

  const getColumn = (colCount) => {
    return (
      <div className='gallery__column' key={photoIndex}>
        {new Array(colCount).fill(1).map((dt, index) => {
          let temp = photoIndex;
          if (temp < imageList.length - 1) {
            photoIndex += 1;
          }

          return getImage(temp);
        })}
      </div>
    );
  };

  const regroupImages = () => {
    const total = imageList.length;
    let colCount = total / 4;
    let residual = total % 4;
    return (
      <>
        {new Array(col).fill(1).map((cl, index) => {
          let tempCount = 0;

          if (index === 0) {
            residual !== 0 ? (tempCount = colCount + residual) : (tempCount = colCount);
          } else {
            tempCount = colCount;
          }

          return getColumn(Math.trunc(tempCount));
        })}
      </>
    );
  };

  useEffect(() => regroupImages(), [imageList]);
  return (
    <Container disableGutters={matches}>
      <div className='gallery'>{regroupImages()}</div>
      <Uploader />
    </Container>
  );
};

export default React.memo(Content);
