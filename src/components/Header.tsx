import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import MenuIcon from '@material-ui/icons/Menu';
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
// @ts-ignore
import rediLogo from "../static/redi-logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    titleContainer: { flexGrow: 1 },
    unstyledLink: {
      textDecoration: "inherit",
    },
    logo: {
      height: "48px",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.titleContainer}>
            {/* <Typography
              to="/"
              component={Link}
              variant="h6"
              className={classes.unstyledLink}
              color="inherit"
            >
              ReDi Community Job Board
            </Typography> */}
            <Link to="/">
              <img
                src={rediLogo}
                alt="ReDi Community Job Board"
                className={classes.logo}
              />
            </Link>
          </Box>
          <Link to="/add" className={classes.unstyledLink}>
            <Button
              variant="contained"
              color="default"
              startIcon={<PublishIcon />}
            >
              Publish Job Listing
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
