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
import { getActivitySpecificImages } from "./../../../../firebase/firebaseService";
import { useHistory } from "react-router-dom";
const BigCard = ({ news }) => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [img, setImg] = useState("");

  const getImage = async () => {
    const result = await getActivitySpecificImages(news.id, 1);
    result.forEach((element) => {
      setImg(element.data());
    });
  };
  useEffect(() => getImage(), [news]);
  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' alt='Contemplative Reptile' height={matches ? "550rem" : "auto"} width={matches ? "550rem" : "auto"} image={img.url} title='' />
        <CardContent>
          <Typography component='h6' variant='h6' color='textSecondary'>
            {news.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={() => history.push("/Activities/ActivityDetails/" + news.id)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BigCard;
