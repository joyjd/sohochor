import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { getCustomStyle } from "./../../../../util";
import { getActivitySpecificImages } from "./../../../../firebase/firebaseService";
import { useHistory } from "react-router-dom";
const SideCard = ({ news }) => {
  const [img, setImg] = useState("");
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const classes = getCustomStyle({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: "18rem",
      height: "18rem",
    },
    cover_sm: {
      width: "14rem",
      height: "14rem",
    },
  })();
  const getImage = async () => {
    const result = await getActivitySpecificImages(news.id, 1);
    result.forEach((element) => {
      setImg(element.data());
    });
  };
  useEffect(() => getImage(), [news]);

  return (
    <Card className={classes.root}>
      <CardMedia className={matches ? classes.cover : classes.cover_sm} image={img.url} title='' />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h6' variant='h6' color='textSecondary'>
            {news.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={() => history.push("/Activities/ActivityDetails/" + news.id)}>
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default SideCard;
