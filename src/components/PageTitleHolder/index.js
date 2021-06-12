import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import PageTitle from "./../PageTitle";
import DetailTitle from "./../DetailTitle";
import "./style.scss";
import clsx from "clsx";

const PageTitleHolder = ({ headerText, descText, subheader, subheaderText }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <div className={clsx(matches2 ? "upMargin_lg" : matches ? "upMargin_md" : "upMargin_xs", "introCardHolder")}>
        <Container fixed>
          <Box boxShadow={1} p={3} width={1} bgcolor='background.paper' className='titleCard'>
            <Box display={{ xs: "block", md: "none" }}>
              {subheader === undefined ? (
                <Box>
                  <PageTitle title={headerText} size='h5' />
                  <Box pt={2}>{descText}</Box>
                </Box>
              ) : (
                <Box>
                  <DetailTitle title={subheaderText} size='h6' subtitle={subheaderText} />
                  <DetailTitle title={headerText} size='h5' />
                </Box>
              )}
            </Box>
            <Box m={3} display={{ xs: "none", md: "block" }}>
              {subheader === undefined ? (
                <Box>
                  <PageTitle title={headerText} size='h3' />
                  <Box pt={2}>{descText}</Box>
                </Box>
              ) : (
                <Box>
                  <DetailTitle title={subheaderText} size='h5' subtitle={subheaderText} />
                  <DetailTitle title={headerText} size='h3' />
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default PageTitleHolder;
