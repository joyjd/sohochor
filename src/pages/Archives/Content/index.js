/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import PicItem from "./../PicItem";
import Uploader from "./../Uploader";

const Content = ({ archiveList }) => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let index = 0;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const generateDivIndex = () => {
    if (index === 15) {
      index = 0;
    }
    return ++index;
  };

  const handleImgZoom = (url, memory, event) => {
    event.preventDefault();
    setImg({ url: url, memory: memory });
    handleOpen();
  };

  const generateImgTab = useCallback(() => {
    console.log("calback executed");
    return (
      <div className='photo-album'>
        {archiveList.map((obj, index) => {
          return (
            <a onClick={(event) => handleImgZoom(obj.url, obj.memory, event)} key={index} className={"polaroid img" + generateDivIndex()}>
              <img src={obj.url} alt='' />
              {obj.memory}
            </a>
          );
        })}
      </div>
    );
  }, [archiveList]);

  return (
    <Container disableGutters={matches}>
      {archiveList.length !== 0 ? <Grid container>{generateImgTab()}</Grid> : null}

      <Uploader />
      <PicItem open={open} handleClose={() => handleClose()} url={img} />
    </Container>
  );
};

export default React.memo(Content);
