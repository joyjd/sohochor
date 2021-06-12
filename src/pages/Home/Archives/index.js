import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageTitle from "./../../../components/PageTitle";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import PolaroidSet from "./../../../components/PolaroidSet";
import Typography from "@material-ui/core/Typography";
import ElevatedButton from "./../../../components/ElevatedButton";
import { getAllArchiveItemsTop6 } from "./../../../firebase/firebaseService";
import { useHistory } from "react-router-dom";

const Archives = () => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const result = await getAllArchiveItemsTop6();
    let temp = [];
    result.forEach((el) => {
      temp.push(el.data());
    });
    setImages(temp);
  };

  useEffect(() => getImages(), []);
  return (
    <Box mt={6} mb={8}>
      <Container fixed>
        <Box display={{ xs: "block", md: "none" }}>
          <PageTitle title='Memory Lane' size='h5' />
        </Box>
        <Box display={{ xs: "none", md: "block" }}>
          <PageTitle title='Memory Lane' size='h3' />
        </Box>
      </Container>
      <Hidden mdUp>
        <Container disableGutters={!matches}>
          <Box mt={5}>
            <Paper variant='outlined'>
              <Box p={1}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={7} xl={7} lg={7}>
                    <PolaroidSet images={images} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} xl={5} lg={5}>
                    <Box height={1} p={2} display='flex' flexDirection='column'>
                      <Typography variant='h6' component='h6'>
                        A walk to remember ..
                      </Typography>
                      <Typography variant='subtitle2' component='div'>
                        An enormous rich scrapbook of memories of all members of Sohochor group since the blooming days at Ramakrishna Mission, Narendrapur. Dont give it a miss !
                      </Typography>
                      <Box mt={3}>
                        <ElevatedButton title='View Memories' handleClickFunc={() => history.push("/Archives")} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Hidden>
      <Hidden smDown>
        <Container disableGutters={matches}>
          <Box mt={5}>
            <Paper variant='outlined'>
              <Box p={1}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={4} xl={4} lg={4}>
                    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='flex-start' height={1} p={4}>
                      <Typography variant='h6' component='h6'>
                        A walk to remember ..
                      </Typography>
                      <Typography variant='subtitle2' component='div'>
                        An enormous rich scrapbook of memories of all members of Sohochor group since the blooming days at Ramakrishna Mission, Narendrapur. Dont give it a miss !
                      </Typography>
                      <Box mt={5}>
                        <ElevatedButton title='View Memories' handleClickFunc={() => history.push("/Archives")} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} xl={8} lg={8}>
                    <PolaroidSet images={images} />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Hidden>
    </Box>
  );
};

export default Archives;
