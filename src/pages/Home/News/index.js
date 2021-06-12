import React, { useState, useEffect } from "react";
import PageTitle from "./../../../components/PageTitle";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import ElevatedButton from "./../../../components/ElevatedButton";
import SideCard from "./SideCard";
import BigCard from "./BigCard";
import { getActivityTop3 } from "./../../../firebase/firebaseService";
import { useHistory } from "react-router-dom";
const News = () => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [news, setNews] = useState([]);

  const getNews = async () => {
    const result = await getActivityTop3();
    let temp = [];
    result.forEach((el) => {
      temp.push(el.data());
    });
    setNews(temp);
  };
  useEffect(() => getNews(), []);
  return news.length !== 0 ? (
    <Box mt={6} mb={8}>
      <Container fixed>
        <Box display={{ xs: "block", md: "none" }}>
          <PageTitle title='SOHOCHOR News' size='h5' />
        </Box>
        <Box display={{ xs: "none", md: "block" }}>
          <PageTitle title='SOHOCHOR News' size='h3' />
        </Box>
      </Container>
      <Container disableGutters={matches}>
        <Box mt={5} mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
              <Zoom in={true} style={{ transitionDelay: "500ms" }}>
                <div>
                  <BigCard news={news[0]} />
                </div>
              </Zoom>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
                  <Zoom in={true} style={{ transitionDelay: "500ms" }}>
                    {matches ? <SideCard news={news[1]} /> : <BigCard news={news[1]} />}
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
                  <Zoom in={true} style={{ transitionDelay: "500ms" }}>
                    {matches ? <SideCard news={news[2]} /> : <BigCard news={news[2]} />}
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
                  <ElevatedButton title={"Read All Activities"} fullWidth={true} handleClickFunc={() => history.push("/Activities")} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  ) : null;
};

export default React.memo(News);
