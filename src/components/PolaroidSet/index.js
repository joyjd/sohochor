import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { getCustomStyle } from "./../../util";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

const PolaroidSet = ({ images }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const classes = getCustomStyle({
    cover: {
      height: "20rem",
    },
    cover_sm: {
      height: "12rem",
    },
    sepia: {
      filter: "sepia(100%)",
    },
    gray: {
      filter: "grayscale(100%)",
    },
  })();
  const [img1, img2, img3, img4, img5, img6] = images;
  return images.length !== 0 ? (
    <>
      <Grid container>
        <Grid item xs>
          <CardMedia className={clsx(matches ? classes.cover : classes.cover_sm, classes.gray)} image={img1.url} title='Live from space album cover' />
        </Grid>
        <Grid item xs>
          <CardMedia className={clsx(matches ? classes.cover : classes.cover_sm, classes.sepia)} image={img2.url} title='Live from space album cover' />
        </Grid>
        <Grid item xs>
          <CardMedia className={clsx(matches ? classes.cover : classes.cover_sm, classes.gray)} image={img3.url} title='Live from space album cover' />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <CardMedia className={clsx(matches ? classes.cover : classes.cover_sm, classes.sepia)} image={img4.url} title='Live from space album cover' />
        </Grid>
        <Grid item xs>
          <CardMedia className={clsx(matches ? classes.cover : classes.cover_sm, classes.gray)} image={img5.url} title='Live from space album cover' />
        </Grid>
        <Grid item xs>
          <CardMedia className={clsx(matches ? classes.cover : classes.cover_sm, classes.sepia)} image={img6.url} title='Live from space album cover' />
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default PolaroidSet;
