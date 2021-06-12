import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Sohochor
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(8),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "60px",
    backgroundColor: "#455a64",
    color: "#ffffff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Box width={1} mt={6} mb={3}>
          <Typography variant='body1'>Footer notes.</Typography>
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
